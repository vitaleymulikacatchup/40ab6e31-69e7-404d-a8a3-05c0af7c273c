// Provided by the backend
const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "High-End Gaming PC Interior with Colorful RGB Lights" },
  { id: "aboutImage", url: "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two professionals working at a shared office desk, top view." },
  { id: "featureImage1", url: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk." },
  { id: "featureImage2", url: "https://images.pexels.com/photos/1181531/pexels-photo-1181531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two women engaging in teamwork by writing on a whiteboard in a bright office setting." },
  { id: "featureImage3", url: "https://images.pexels.com/photos/4491441/pexels-photo-4491441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A business desk setup with a calculator, papers, and a keyboard, reflecting a work environment." },
  { id: "metricImage", url: "https://images.pexels.com/photos/7688174/pexels-photo-7688174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A multicultural office team high-fiving and celebrating a successful collaboration." },
  { id: "teamImage1", url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of professionals shaking hands over coffee in a modern office." }
];

"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Peak"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          buttonText="Get Started"
          buttonVariant="hover-magnetic"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Reach New Heights with Peak"
            description="Innovative solutions to elevate your business."
            imagePosition="right"
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "View Demo", href: "demo" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Peak"
            description={[
              "We're a team dedicated to transforming the cloud experience.",
              "Our mission is to empower businesses through technology."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Features"
            features={[
              { title: "Advanced Analytics", description: "Explore deep insights with our analytics tools.", icon: "Zap" },
              { title: "Collaborative Tools", description: "Enhance team efficiency with collaboration features.", icon: "Users" },
              { title: "Project Management", description: "Organize and track projects seamlessly.", icon: "CheckCircle" }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Choose Your Plan"
            plans={[
              { id: "1", price: "$10/mo", name: "Basic", buttons: [{ text: "Sign Up", href: "signup" }, { text: "Contact Sales", href: "contact" }], features: ["Feature 1", "Feature 2", "Feature 3"] },
              { id: "2", badge: "Most Popular", badgeIcon: "Star", price: "$20/mo", name: "Pro", buttons: [{ text: "Sign Up", href: "signup" }, { text: "Contact Sales", href: "contact" }], features: ["Feature A", "Feature B", "Feature C"] }
            ]}
          />
        </div>
      </div>
      <div id="metric" data-section="metric" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <MetricCardOne
            title="Our Impact"
            metrics={[
              { id: "1", value: "10k+", title: "active users", description: "Continuously growing user base.", icon: "TrendingUp" },
              { id: "2", value: "99.9%", title: "uptime", description: "Reliable and successful operations.", icon: "Shield" }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            members={[
              { id: "1", name: "Alice Brown", role: "CEO", imageSrc: assetMap.find(a => a.id === "teamImage1")?.url },
              { id: "2", name: "John Doe", role: "CTO", imageSrc: assetMap.find(a => a.id === "teamImage1")?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Keep In Touch"
            title="Contact Us"
            description="Reach out for more information or support."
            termsText="We value your privacy. Unsubscribe anytime."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Careers", href: "careers" }] },
              { title: "Support", items: [{ label: "Help Center", href: "help" }, { label: "Contact", href: "contact" }] }
            ]}
            logoSrc="/path/to/logo.svg"
            copyrightText="© 2025 Peak"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
