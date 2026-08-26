#!/usr/bin/env bash
# Deploy the Remote Office company website (this repo) to remoteoffice.al.
#
#   ./deploy.sh                 -> build + upload to deploy@169.58.239.187 (srv1.remoteoffice.al)
#   ./deploy.sh user@host       -> same, different SSH target
#   SKIP_BUILD=1 ./deploy.sh    -> upload the existing dist/ without rebuilding
#
# Target directory on the server is ALWAYS /var/www/remoteoffice.al (served by
# /etc/caddy/sites/remoteoffice.caddy for remoteoffice.al + www). The portal landing
# (portal.remoteoffice.al) lives in a different repo and a different directory
# (/var/www/portal-landing) — this script never touches it.
#
# Works from Git Bash on Windows: tar over ssh, no rsync needed.
set -euo pipefail
cd "$(dirname "$0")"

TARGET="${1:-deploy@169.58.239.187}"
DEST=/var/www/remoteoffice.al
SSH_OPTS=(-o ConnectTimeout=15 -o StrictHostKeyChecking=accept-new)

if [ "${SKIP_BUILD:-0}" != "1" ]; then
  echo "> npm run build"
  npm run build >/dev/null
fi
[ -f dist/index.html ] || { echo "!! dist/index.html missing — build failed?"; exit 1; }

echo "> uploading dist/ -> $TARGET:$DEST"
tar czf - -C dist . | ssh "${SSH_OPTS[@]}" "$TARGET" "
  set -e
  STAGE=\$(mktemp -d /tmp/remoteoffice-site.XXXXXX)
  tar xzf - -C \"\$STAGE\"
  chmod -R u=rwX,go=rX \"\$STAGE\"
  rm -rf $DEST.new && mv \"\$STAGE\" $DEST.new
  [ -d $DEST ] && mv $DEST $DEST.old || true
  mv $DEST.new $DEST && rm -rf $DEST.old
  echo \"  deployed: \$(find $DEST -type f | wc -l) files\"
"
echo "> check: https://remoteoffice.al"
