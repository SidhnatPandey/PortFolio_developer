import { socialLinks } from "./contact-section";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="font-display text-xl font-bold">
              Sidhant
            </a>
            <p className="text-foreground/60 mt-1 text-sm">
              Front-end Developer & Designer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60">
            © {currentYear} Sidhant. All rights reserved.
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
