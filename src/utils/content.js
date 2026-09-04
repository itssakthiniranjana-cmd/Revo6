/**
 * REVO6 CONTENT REPOSITORY
 * Source of truth: Crawled directly from https://revo6.com/
 * All copy, metadata, contact info, and statistics preserved verbatim.
 */

export const siteContent = {
  brand: {
    name: "Revolution 6",
    shortName: "REVO6",
    tagline: "Modern Business Consulting",
    copyright: "© 2025. All rights reserved.",
    contact: {
      email: "meya.rev@outlook.com",
      emailLabel: "Email",
      phone: "+1(628)200-0567",
      phoneLabel: "Phone",
      subtitle: "Reach out for tailored business solutions."
    },
    metrics: [
      {
        value: "150+",
        label: "Trusted Globally",
        subLabel: "100+ Clients"
      },
      {
        value: "15",
        label: "Trusted Partners",
        subLabel: "Years of Collective Impact"
      }
    ]
  },

  pages: {
    home: {
      meta: {
        title: "Revolution 6: Modern Business Consulting | Revolution 6",
        description: "Revolution 6 offers expert accounting, software consulting, and warehouse management solutions to streamline your business operations.",
        keywords: "accounting, software consulting, warehouse management"
      },
      hero: {
        badge: "Intelligence / Precision / Transformation",
        title: "Transforming Business with Technology",
        subtitle: "Accounting, software, and supply chain solutions tailored for you",
        ctaText: "Get Started",
        ctaLink: "/services",
        pillars: [
          {
            tag: "01 / FINTECH & COMPLIANCE",
            title: "Accounting",
            highlight: "Streamline your financial operations efficiently",
            description: "Accurate reporting tailored to your needs",
            detail: "Expert support for complex accounting challenges"
          },
          {
            tag: "02 / ENTERPRISE ENGINEERING",
            title: "Software",
            highlight: "Consulting to optimize your software and enhance performance",
            description: "Modern architecture tailored to scale your digital capabilities",
            detail: "Custom integrations driving engineering velocity"
          },
          {
            tag: "03 / OPERATIONS & LOGISTICS",
            title: "WMS",
            highlight: "Streamlining workflows with smart technology solutions",
            description: "Real-time warehouse optimization and supply chain orchestration",
            detail: "Automated tracking and delay reduction"
          }
        ]
      },
      about: {
        tag: "WHO WE ARE",
        title: "About Revolution 6",
        body: "We offer modern accounting, software consulting, and WMS solutions that enable businesses to optimize workflows, boost productivity, and drive smarter operations.",
        stats: [
          { value: "150+", label: "Trusted Globally", highlight: "100+ Clients" },
          { value: "15", label: "Trusted Partners", highlight: "Proven Track Record" }
        ]
      },
      servicesOverview: {
        tag: "PRACTICE AREAS",
        title: "Our Services",
        subtitle: "Helping your business with accounting, software, and supply chain.",
        items: [
          {
            number: "01",
            title: "Accounting",
            description: "Accurate financial management tailored to your business needs.",
            image: "/assets/images/accounting.jpg",
            link: "/services#accounting"
          },
          {
            number: "02",
            title: "Software",
            description: "Consulting to optimize your software and enhance performance.",
            image: "/assets/images/software.jpg",
            link: "/services#software"
          },
          {
            number: "03",
            title: "WMS",
            description: "Streamlining workflows with smart technology solutions.",
            image: "/assets/images/wms.jpg",
            link: "/services#wms"
          }
        ]
      },
      newsletter: {
        tag: "STAY INFORMED",
        title: "Join Revolution 6",
        subtitle: "Stay updated on business tech insights",
        placeholder: "Enter email",
        buttonText: "Send",
        successMessage: "Thanks, we’ll be in touch!"
      }
    },

    services: {
      meta: {
        title: "Revolution 6: Expert Business Consulting Services",
        description: "Revolution 6 offers tailored accounting, software consulting, and warehouse management solutions to streamline your business operations and boost efficiency.",
        keywords: "accounting, software consulting, warehouse management"
      },
      hero: {
        badge: "EXPERTISE & METHODOLOGY",
        title: "Our Services",
        subtitle: "Helping your business thrive with tailored accounting and tech solutions",
        ctaText: "Explore Projects",
        ctaLink: "#projects"
      },
      practices: [
        {
          id: "accounting",
          number: "01",
          title: "Accounting",
          subtitle: "Accurate financial management tailored to your business needs.",
          description: "Simplify financial operations with expert bookkeeping and reporting.",
          extended: "We provide comprehensive bookkeeping, precision compliance, and insightful reporting frameworks that eliminate bottlenecks and deliver crystal-clear fiscal visibility.",
          highlights: [
            "Accurate reporting tailored to your needs",
            "Expert support for complex accounting challenges",
            "Streamline your financial operations efficiently"
          ],
          image: "/assets/images/accounting.jpg"
        },
        {
          id: "software",
          number: "02",
          title: "Software",
          subtitle: "Consulting to optimize your software and enhance performance.",
          description: "Optimize your tech with custom software consulting and integration.",
          extended: "From system architecture evaluation to tailored software integrations, our engineering advisory accelerates technical execution and strengthens digital resilience.",
          highlights: [
            "Consulting to optimize your software and enhance performance",
            "Modern tech integration customized to you",
            "Enhanced software performance, smoother workflows"
          ],
          image: "/assets/images/software.jpg"
        },
        {
          id: "wms",
          number: "03",
          title: "Warehouse Management (WMS)",
          subtitle: "Streamlining workflows with smart technology solutions.",
          description: "Revamped warehouse processes that cut delays and streamline fulfillment.",
          extended: "Empower your supply chain with modern warehouse management architectures that unite inventory visibility, real-time dispatching, and automated routing.",
          highlights: [
            "Revamped warehouse processes that cut delays",
            "Streamlining workflows with smart technology solutions",
            "End-to-end supply chain operational clarity"
          ],
          image: "/assets/images/wms.jpg"
        }
      ],
      projects: {
        tag: "PROVEN IMPACT",
        title: "Our Projects",
        subtitle: "Tailored solutions driving real business change.",
        items: [
          {
            id: "accounting-boost",
            title: "Accounting Boost",
            summary: "Streamlined financial reports for faster decisions.",
            category: "Financial Systems",
            impact: "Enabled rapid executive decision-making through automated reporting workflows and reconciliation precision."
          },
          {
            id: "wms-upgrade",
            title: "WMS Upgrade",
            summary: "Revamped warehouse processes that cut delays.",
            category: "Supply Chain & Logistics",
            impact: "Re-engineered core warehousing operations, eliminating dispatch delays and optimizing multi-facility inventory flows."
          },
          {
            id: "software-tune",
            title: "Software Tune",
            summary: "Enhanced software performance, smoother workflows.",
            category: "Software Engineering",
            impact: "Diagnosed bottlenecks and optimized software stack throughput for enhanced daily team productivity."
          },
          {
            id: "digital-shift",
            title: "Digital Shift",
            summary: "Modern tech integration customized to you.",
            category: "Digital Transformation",
            impact: "Seamlessly integrated modern software infrastructure into legacy operations with zero business disruption."
          }
        ]
      }
    },

    solutions: {
      meta: {
        title: "Revolution 6 Business Solutions",
        description: "Boost your business with expert accounting, software consulting, and warehouse management solutions tailored for modern operations.",
        keywords: "accounting, software consulting, warehouse management"
      },
      hero: {
        badge: "ENTERPRISE TRANSFORMATION",
        title: "Our Solutions",
        subtitle: "Digital Solutions That Bring Accuracy, Efficiency, and Clarity",
        ctaText: "Discover Who We Are",
        ctaLink: "#who-we-are"
      },
      solutionsGrid: [
        {
          id: "accounting-streamline",
          number: "01",
          title: "Accounting Streamline",
          summary: "Simplified financial processes for clarity.",
          focus: "Accuracy & Fiscal Visibility",
          description: "We reconstruct fragmented accounting workflows into unified, predictable, and compliant financial systems tailored to your growth trajectory."
        },
        {
          id: "software-consulting",
          number: "02",
          title: "Software Consulting",
          summary: "Tailored tech solutions boosting efficiency.",
          focus: "Engineering Optimization",
          description: "High-impact technical consulting that aligns your software investments, tech stack selections, and workflow architecture with commercial goals."
        },
        {
          id: "wms-optimization",
          number: "03",
          title: "WMS Optimization",
          summary: "Enhanced warehouse processes saving time.",
          focus: "Fulfillment Velocity",
          description: "Comprehensive warehouse management solutions designed to streamline stock control, picking accuracy, and operational fulfillment velocity."
        },
        {
          id: "digital-change",
          number: "04",
          title: "Digital Change",
          summary: "Driving smooth tech transitions daily.",
          focus: "Sustainable Transformation",
          description: "Guiding organizations through digital evolution with pragmatic roadmaps, change management, and seamless technology integrations."
        }
      ],
      whoWeAre: {
        tag: "CORE IDENTITY",
        title: "Who We Are",
        body: "At Revolution 6, we blend accounting expertise with tech savvy to transform your business operations.",
        stats: [
          { value: "150+", label: "Clients", highlight: "Trusted Globally" },
          { value: "15", label: "Trusted Partners", highlight: "Collaborative Excellence" }
        ],
        ctaText: "Learn More",
        ctaLink: "/services"
      }
    },

    careers: {
      meta: {
        title: "Careers at revolution 6: Join our team",
        description: "Find exciting job opportunities at revolution 6, where we blend technology and business to transform accounting, software, and supply chains.",
        keywords: "careers, consulting jobs, technology roles"
      },
      hero: {
        badge: "CAREERS & CULTURE",
        title: "Meet Revolution 6",
        subtitle: "We blend accounting expertise with tech savvy to transform your business operations efficiently and effectively.",
        ctaText: "Join Us",
        ctaLink: "#contact-form",
        stats: [
          { value: "150+", label: "Trusted Globally", highlight: "100+ Clients" },
          { value: "15", label: "Trusted Partners", highlight: "High-Caliber Network" }
        ]
      },
      culture: {
        tag: "JOIN OUR MISSION",
        title: "Transforming Business & Tech Together",
        description: "Find exciting job opportunities at revolution 6, where we blend technology and business to transform accounting, software, and supply chains.",
        pillars: [
          {
            title: "Accounting Intelligence",
            desc: "Solve complex fiscal challenges with modern precision tools and clear reporting."
          },
          {
            title: "Software Innovation",
            desc: "Architect and optimize high-leverage software systems and seamless integrations."
          },
          {
            title: "Supply Chain Excellence",
            desc: "Revolutionize warehouse logistics and operational workflows across industries."
          }
        ]
      },
      contactForm: {
        tag: "DIRECT APPLICATION & INQUIRIES",
        title: "Contact Us",
        subtitle: "Reach out to join revolution 6 or ask questions.",
        fields: {
          fullName: {
            label: "Your Full Name",
            placeholder: "Enter name",
            required: false
          },
          email: {
            label: "Email Address",
            placeholder: "Enter email",
            required: true
          },
          message: {
            label: "Your Message",
            placeholder: "Type message",
            required: true
          }
        },
        submitText: "Send Message",
        successMessage: "Thanks for reaching out!"
      }
    }
  }
};
