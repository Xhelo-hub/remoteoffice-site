import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { HeroIllustration, Icon, LogoMark } from './Brand'
import type { IconName } from './Brand'
import './App.css'

type Language = 'en' | 'sq'

const sectionLinks = ['#services', '#solutions', '#about', '#contact']
const serviceIcons: IconName[] = ['file-check', 'shield', 'grid', 'list']

const content = {
  en: {
    nav: ['Services', 'Solutions', 'About', 'Contact'],
    eyebrow: 'Business operations, without the overhead',
    title: 'Every deadline, every document, under control.',
    intro: 'Remote Office helps businesses, NGOs and individuals operate with clarity, compliance and momentum, even without a traditional office and team.',
    explore: 'Explore services',
    talk: 'Talk to our team',
    illustrationTotal: 'TOTAL',
    proof: 'A professional partner for everyday progress',
    servicesLabel: 'What we do',
    servicesTitle: 'Everything your operation needs to move forward.',
    servicesIntro: 'From financial control to systems that work together, we bring structure and reliable support to the work that matters.',
    services: [
      ['01', 'Financial services', 'Accounting, reporting, payroll and practical financial guidance that keeps your business informed and compliant.'],
      ['02', 'Legal & administration', 'Administrative and legal support designed around the real needs of companies, NGOs and individuals in Albania.'],
      ['03', 'Application development', 'Useful digital products and custom workflows that simplify work, decisions and service delivery.'],
      ['04', 'Operational structuring', 'We design the processes, tools and documentation that help a lean team perform like a strong one.'],
    ],
    learnMore: 'Learn more',
    solutionsLabel: 'Digital solutions',
    solutionsTitle: 'Your essential tools, gathered in one place.',
    solutionsIntro: 'Access the applications and support services that keep remote operations connected.',
    apps: [
      ['Konsulence', 'Financial and business support platform', 'https://konsulence.al'],
      ['Remote Office Portal', 'Documents, deadlines and payroll in one secure workspace', 'https://portal.remoteoffice.al'],
      ['Business Workspace', 'A space reserved for your next solution', '#'],
    ],
    comingSoon: 'Coming soon',
    trustLabel: 'Built on trust',
    trustTitle: 'Professional work. Christian integrity. Practical impact.',
    trustBody: 'As Christian business people in mission and in the professional world, integrity is our core value. We help clients increase efficiency and remain compliant through transparent, responsible guidance, never through hiding taxes.',
    facts: [
      ['Registered entity', 'PGROUP INC · NIPT M01419018I'],
      ['Established', '2024 · Tirana, Albania'],
      ['Working hours', 'Mon – Fri, 09:00 – 15:30'],
    ],
    certTitle: 'QuickBooks Online ProAdvisor',
    certBody: 'Certified support for modern bookkeeping and financial workflows.',
    verified: 'Verified',
    teamLabel: 'The people behind the work',
    teamTitle: 'A capable team, ready to join yours.',
    team: [['Arben K.', 'Managing Partner'], ['Elira M.', 'Accounting & Compliance'], ['Jonida P.', 'Operations & Systems']],
    photo: 'Photo',
    contactLabel: 'Start a conversation',
    contactTitle: 'Make your operation lighter.',
    contactBody: 'Tell us what is slowing your work down. We will help you find a clearer way forward.',
    whatsapp: 'WhatsApp support',
    name: 'Your name',
    email: 'Email address',
    message: 'How can we help?',
    send: 'Send enquiry',
    sent: 'Thank you. We will be in touch shortly.',
    footerRole: 'A service provider of PGROUP INC',
    address: 'Rruga e Barrikadave, Nr. 125, Tirana 1016, Albania',
    hours: 'Monday – Friday, 09:00 – 15:30',
    rights: 'All rights reserved.',
  },
  sq: {
    nav: ['Shërbimet', 'Zgjidhjet', 'Rreth nesh', 'Kontakt'],
    eyebrow: 'Operacione biznesi, pa kostot e një zyre',
    title: 'Dokumentet, afatet dhe listëpagesat — në një vend.',
    intro: 'Remote Office ndihmon bizneset, OJQ-të dhe individët të operojnë me qartësi, përputhshmëri dhe ritëm, edhe pa një zyrë dhe ekip tradicional.',
    explore: 'Shiko shërbimet',
    talk: 'Flisni me ekipin',
    illustrationTotal: 'TOTALI',
    proof: 'Partner profesional për progresin e përditshëm',
    servicesLabel: 'Çfarë bëjmë',
    servicesTitle: 'Gjithçka që i duhet operacionit tuaj për të ecur përpara.',
    servicesIntro: 'Nga kontrolli financiar te sistemet që punojnë së bashku, sjellim strukturë dhe mbështetje të besueshme në punën që ka rëndësi.',
    services: [
      ['01', 'Shërbime financiare', 'Kontabilitet, raporte, paga dhe këshillim financiar praktik që e mban biznesin tuaj të informuar dhe në përputhje me ligjin.'],
      ['02', 'Ligjore dhe administrim', 'Mbështetje administrative dhe ligjore sipas nevojave reale të kompanive, OJQ-ve dhe individëve në Shqipëri.'],
      ['03', 'Zhvillim aplikacionesh', 'Produkte digjitale dhe procese të personalizuara që thjeshtojnë punën, vendimet dhe ofrimin e shërbimeve.'],
      ['04', 'Strukturim operacional', 'Projektojmë proceset, mjetet dhe dokumentacionin që ndihmojnë një ekip të vogël të funksionojë si një ekip i fortë.'],
    ],
    learnMore: 'Mëso më shumë',
    solutionsLabel: 'Zgjidhje digjitale',
    solutionsTitle: 'Mjetet tuaja thelbësore, në një vend.',
    solutionsIntro: 'Aksesoni aplikacionet dhe shërbimet që mbajnë operacionet në distancë të lidhura.',
    apps: [
      ['Konsulence', 'Platformë për mbështetje financiare dhe biznesi', 'https://konsulence.al'],
      ['Remote Office Portal', 'Dokumentet, afatet dhe listëpagesat në një hapësirë të sigurt', 'https://portal.remoteoffice.al'],
      ['Business Workspace', 'Një hapësirë për zgjidhjen tuaj të ardhshme', '#'],
    ],
    comingSoon: 'Së shpejti',
    trustLabel: 'Ndërtuar mbi besim',
    trustTitle: 'Punë profesionale. Integritet i krishterë. Ndikim praktik.',
    trustBody: 'Si biznesmenë të krishterë në mision dhe në botën profesionale, integriteti është vlera jonë themelore. Ndihmojmë klientët të rrisin efikasitetin dhe të jenë në përputhje me ligjin përmes udhëzimit transparent e të përgjegjshëm, jo duke fshehur taksat.',
    facts: [
      ['Subjekti i regjistruar', 'PGROUP INC · NIPT M01419018I'],
      ['Themeluar', '2024 · Tiranë, Shqipëri'],
      ['Orari i punës', 'E hënë – E premte, 09:00 – 15:30'],
    ],
    certTitle: 'QuickBooks Online ProAdvisor',
    certBody: 'Mbështetje e certifikuar për kontabilitetin modern dhe proceset financiare.',
    verified: 'Verifikuar',
    teamLabel: 'Njerëzit pas punës',
    teamTitle: 'Një ekip i aftë, gati t’i bashkohet ekipit tuaj.',
    team: [['Arben K.', 'Partner Menaxhues'], ['Elira M.', 'Kontabilitet dhe Përputhshmëri'], ['Jonida P.', 'Operacione dhe Sisteme']],
    photo: 'Foto',
    contactLabel: 'Nisni një bisedë',
    contactTitle: 'Bëjeni operacionin tuaj më të lehtë.',
    contactBody: 'Na tregoni çfarë po ngadalëson punën tuaj. Do t’ju ndihmojmë të gjeni një mënyrë më të qartë përpara.',
    whatsapp: 'Mbështetje në WhatsApp',
    name: 'Emri juaj',
    email: 'Adresa e emailit',
    message: 'Si mund t’ju ndihmojmë?',
    send: 'Dërgo kërkesën',
    sent: 'Faleminderit. Do t’ju kontaktojmë së shpejti.',
    footerRole: 'Ofrues shërbimesh i PGROUP INC',
    address: 'Rruga e Barrikadave, Nr. 125, Tiranë 1016, Shqipëri',
    hours: 'E hënë – E premte, 09:00 – 15:30',
    rights: 'Të gjitha të drejtat e rezervuara.',
  },
} as const

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [sent, setSent] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const text = content[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Remote Office">
          <LogoMark size={32} />
          <span className="wordmark">remoteoffice</span>
        </a>
        <nav className={menuOpen ? 'menu-open' : ''} aria-label="Main">
          {text.nav.map((item, index) => (
            <a key={item} href={sectionLinks[index]} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="button button-ghost nav-whatsapp" href="https://wa.me/355692064518" target="_blank" rel="noreferrer">
            <Icon name="message-circle" />WhatsApp
          </a>
          <button className="language" onClick={() => setLanguage(language === 'en' ? 'sq' : 'en')} aria-label={language === 'en' ? 'Ndrysho në shqip' : 'Switch to English'}>
            {language === 'en' ? 'SQ' : 'EN'}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>{text.title}</h1>
            <p className="lead">{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">{text.explore}<Icon name="arrow-right" /></a>
              <a className="button button-secondary" href="#contact">{text.talk}<Icon name="arrow-right" /></a>
            </div>
          </div>
          <div className="hero-visual">
            <HeroIllustration totalLabel={text.illustrationTotal} />
          </div>
        </section>

        <div className="trust-line">
          <span>{text.proof}</span>
          <span className="num">PGROUP INC · NIPT M01419018I</span>
          <span>Tirana · Albania · Europe</span>
        </div>

        <section className="content-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">{text.servicesLabel}</p>
            <h2>{text.servicesTitle}</h2>
            <p>{text.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {text.services.map(([number, title, body], index) => (
              <article className="card service-card" key={number}>
                <div className="service-top">
                  <span className="icon-tile"><Icon name={serviceIcons[index]} /></span>
                  <span className="service-number num">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
                <a className="text-link" href="#contact">{text.learnMore}<Icon name="arrow-right" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="section-heading">
            <p className="eyebrow">{text.solutionsLabel}</p>
            <h2>{text.solutionsTitle}</h2>
            <p>{text.solutionsIntro}</p>
          </div>
          <div className="app-grid">
            {text.apps.map(([name, body, link], index) => {
              const live = link !== '#'
              return (
                <a className={live ? 'app-card' : 'app-card app-card-soon'} href={link} target={live ? '_blank' : undefined} rel={live ? 'noreferrer' : undefined} aria-disabled={!live} key={name}>
                  <span className={`app-logo app-logo-${index}`}>{index === 1 ? <LogoMark size={44} /> : index === 0 ? 'K' : '+'}</span>
                  <span className="app-text">
                    <strong>{name}</strong>
                    <small>{body}</small>
                  </span>
                  {live ? <Icon name="arrow-right" className="app-arrow" /> : <span className="badge-soon">{text.comingSoon}</span>}
                </a>
              )
            })}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="card fact-card">
            <div className="fact-door"><LogoMark size={96} /></div>
            <dl className="fact-list">
              {text.facts.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd className="num">{value}</dd></div>
              ))}
            </dl>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{text.trustLabel}</p>
            <h2>{text.trustTitle}</h2>
            <p>{text.trustBody}</p>
            <div className="certification">
              <span className="icon-tile"><Icon name="shield" /></span>
              <span className="cert-text">
                <strong>{text.certTitle}</strong>
                <small>{text.certBody}</small>
              </span>
              <span className="verified"><Icon name="check" />{text.verified}</span>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="team-inner">
            <div className="section-heading">
              <p className="eyebrow">{text.teamLabel}</p>
              <h2>{text.teamTitle}</h2>
            </div>
            <div className="team-grid">
              {text.team.map(([name, role]) => (
                <div className="card team-card" key={name}>
                  <div className="avatar"><Icon name="users" /><span>{text.photo}</span></div>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">{text.contactLabel}</p>
            <h2>{text.contactTitle}</h2>
            <p>{text.contactBody}</p>
            <ul className="contact-links">
              <li><Icon name="phone" /><a className="num" href="tel:+355692064518">+355 69 206 4518</a></li>
              <li><Icon name="mail" /><a href="mailto:info@remoteoffice.al">info@remoteoffice.al</a></li>
              <li><Icon name="message-circle" /><a href="https://wa.me/355692064518" target="_blank" rel="noreferrer">{text.whatsapp}</a></li>
            </ul>
          </div>
          <form className="card contact-form" onSubmit={handleSubmit}>
            <label><span>{text.name}</span><input required name="name" autoComplete="name" /></label>
            <label><span>{text.email}</span><input required type="email" name="email" autoComplete="email" /></label>
            <label><span>{text.message}</span><textarea required name="message" rows={4} /></label>
            <button className="button button-primary" type="submit">{text.send}<Icon name="arrow-right" /></button>
            {sent && <p className="form-success" role="status"><Icon name="check" />{text.sent}</p>}
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <LogoMark size={40} />
          <span>
            <span className="wordmark">remoteoffice</span>
            <span className="wordmark-sub">Solutions</span>
          </span>
        </div>
        <p className="footer-info">
          {text.footerRole}<br />
          {text.address}<br />
          <span className="num">{text.hours}</span>
        </p>
        <div className="footer-meta">
          <div className="socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <small>© 2026 Remote Office Solutions · {text.rights}</small>
        </div>
      </footer>
    </div>
  )
}

export default App
