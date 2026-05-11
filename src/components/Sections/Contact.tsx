import { siteData } from '../../data'
import { Mail, ArrowUpRight } from 'lucide-react'
import { FaTelegram, FaPhone } from 'react-icons/fa'
import MaxIcon from '../Icons/MaxIcon'

type AccentColor = 'blue' | 'emerald' | 'violet' | 'orange'

interface ContactConfig {
  icon: typeof FaTelegram | typeof MaxIcon | typeof Mail | typeof FaPhone
  gradient: string
  accent: AccentColor
}

interface ContactCardProps {
  contact: {
    url: string
    platform: string
    status: string
    description: string
    label: string
  }
  config: ContactConfig
  isLast?: boolean
}

interface FeatureCardProps {
  icon: typeof Mail | typeof ArrowUpRight
  title: string
  description: string
  accent: AccentColor
}

const CONTACT_CARDS: ContactConfig[] = [
  {
    icon: FaTelegram,
    gradient: 'from-blue-500 to-sky-400',
    accent: 'blue',
  },
  {
    icon: MaxIcon,
    gradient: 'from-violet-500 to-purple-400',
    accent: 'violet',
  },
  {
    icon: Mail,
    gradient: 'from-orange-500 to-amber-400', 
    accent: 'orange',
  },
  {
    icon: FaPhone,
    gradient: 'from-emerald-500 to-green-400', 
    accent: 'emerald',
  },
]

const accentColors: Record<AccentColor, {
  badge: string
  icon: string
  dot: string
  link: string
  border: string
}> = {
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: 'bg-blue-500/10 text-blue-400',
    dot: 'bg-blue-400',
    link: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/40',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'bg-emerald-500/10 text-emerald-400',
    dot: 'bg-emerald-400',
    link: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: 'bg-violet-500/10 text-violet-400',
    dot: 'bg-violet-400',
    link: 'text-violet-400',
    border: 'border-violet-500/20 hover:border-violet-500/40',
  },
  orange: {
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    icon: 'bg-orange-500/10 text-orange-400',
    dot: 'bg-orange-400',
    link: 'text-orange-400',
    border: 'border-orange-500/20 hover:border-orange-500/40',
  },
}

function ContactCard({ contact, config }: ContactCardProps) {
  const Icon = config.icon
  const colors = accentColors[config.accent]

  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex flex-col sm:flex-row items-start gap-6 
        p-6 sm:p-8 rounded-2xl border bg-gray-950/80 backdrop-blur-sm
        transition-colors duration-200
        ${colors.border}
      `}
    >
      <div className={`
        shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
        ${colors.icon}
      `}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {contact.platform}
          </h3>
          <span className={`
            self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
            text-xs font-medium border
            ${colors.badge}
          `}>
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>
            {contact.status}
          </span>
        </div>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
          {contact.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium">
          <span className={colors.link}>
            {contact.label}
          </span>
          <ArrowUpRight className={`w-4 h-4 ${colors.link} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
        </div>
      </div>
    </a>
  )
}

function FeatureCard({ icon: Icon, title, description, accent }: FeatureCardProps) {
  const iconColors: Record<AccentColor, string> = {
    blue: 'text-blue-400',
    emerald: 'text-emerald-400',
    violet: 'text-violet-400',
    orange: 'text-orange-400',
  }

  return (
    <div className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-gray-900/50 border border-gray-800">
      <div className="shrink-0 mt-0.5">
        <Icon className={`w-5 h-5 ${iconColors[accent]}`} />
      </div>
      <div>
        <h4 className="text-white font-medium mb-1 text-sm sm:text-base">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Contact() {
  const { contacts } = siteData

  const items = CONTACT_CARDS.map((config, index) => ({
    ...config,
    contact: contacts.items.find(item =>
      item.platform === (index === 0 ? 'Telegram' : index === 1 ? 'Max' : index === 2 ? 'Email' : 'Phone')
    ),
  }))

  return (
    <section id='contact' className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(100,200,255,0.05),transparent_50%)]"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-6">
            {contacts.title1}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            <span className="text-gray-300">{contacts.title2}</span>
            <br />
            <span className="text-white">{contacts.title3}</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            {contacts.title4}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {items.map((item, index) => (
            item.contact && (
              <ContactCard
                key={index}
                contact={item.contact}
                config={item}
              />
            )
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 sm:mb-20">
          <FeatureCard
            icon={Mail}
            title={contacts.footerTitle1}
            description={contacts.footerSubTitle2}
            accent="blue"
          />
          <FeatureCard
            icon={ArrowUpRight}
            title={contacts.footerSubTitle1}
            description={contacts.footerSubTitle2}
            accent="emerald"
          />
          <FeatureCard
            icon={ArrowUpRight}
            title={contacts.footerTitle3}
            description={contacts.footerSubTitle3}
            accent="violet"
          />
        </div>

        <div className="border-t border-gray-800 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-sm text-gray-400">{contacts.footerTitle}</span>
            </div>
            <p className="text-sm text-gray-600">
              {contacts.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}