import { socialLinks } from '@/lib/socials'

// Per-badge tilt so the row feels hand-placed
const rotations = [-4, 3, -2]

export default function SocialBadges() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social, i) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p5-social-badge"
          style={{ '--badge-rot': `${rotations[i % rotations.length]}deg` } as React.CSSProperties}
        >
          <social.icon className="skew-x-[8deg]" />
        </a>
      ))}
    </div>
  )
}
