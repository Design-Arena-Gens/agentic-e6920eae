'use client';

import { useState } from 'react';

const contentTemplates = {
  educational: [
    {
      title: "WordPress Speed Optimization Tips",
      content: "🚀 3 Quick WordPress Speed Fixes:\n\n1. Enable GZIP compression\n2. Optimize images (use WebP format)\n3. Minimize CSS/JS files\n\nYour site should load in under 3 seconds!\n\n#WordPress #WebDesign #SpeedOptimization",
      category: "Technical Tips"
    },
    {
      title: "Color Psychology in Design",
      content: "🎨 Color Psychology for Your Brand:\n\n🔵 Blue = Trust & Professionalism\n🔴 Red = Energy & Urgency\n🟢 Green = Growth & Health\n🟡 Yellow = Optimism & Clarity\n\nChoose wisely! Colors influence 85% of buying decisions.\n\n#GraphicDesign #BrandingTips #ColorTheory",
      category: "Design Education"
    },
    {
      title: "WordPress Security Essentials",
      content: "🔒 5 Must-Have WordPress Security Steps:\n\n✅ Use strong passwords\n✅ Keep plugins updated\n✅ Install SSL certificate\n✅ Enable 2FA authentication\n✅ Regular backups\n\nProtect your website from 90% of attacks!\n\n#WordPressSecurity #WebDevelopment #CyberSecurity",
      category: "Technical Tips"
    },
    {
      title: "Typography Best Practices",
      content: "✍️ Typography Rules Every Designer Should Know:\n\n• Max 2-3 fonts per design\n• Line spacing = 1.5x font size\n• Contrast is key for readability\n• Hierarchy guides the eye\n\nGood typography = Good design!\n\n#Typography #GraphicDesign #DesignTips",
      category: "Design Education"
    },
    {
      title: "WordPress Plugin Recommendations",
      content: "🔌 My Top 5 WordPress Plugins for 2024:\n\n1. Yoast SEO - Search optimization\n2. WP Rocket - Speed & caching\n3. Elementor - Page building\n4. Wordfence - Security\n5. UpdraftPlus - Backups\n\nTransform your website today!\n\n#WordPress #Plugins #WebDesign",
      category: "Technical Tips"
    },
    {
      title: "Design Trend Alert",
      content: "📊 Top Design Trends for 2024:\n\n🌟 3D Elements & Immersive Graphics\n🌟 Bold Typography\n🌟 Sustainable Design Practices\n🌟 AI-Generated Artwork\n🌟 Retro-Futurism\n\nStay ahead of the curve!\n\n#DesignTrends #GraphicDesign #2024Trends",
      category: "Design Education"
    },
    {
      title: "Mobile-First Design",
      content: "📱 Why Mobile-First Design Matters:\n\n• 60% of web traffic is mobile\n• Google prioritizes mobile sites\n• Better user experience\n• Higher conversion rates\n\nIs your WordPress site mobile-ready?\n\n#MobileFirst #ResponsiveDesign #WordPress",
      category: "Technical Tips"
    },
    {
      title: "Logo Design Principles",
      content: "🎯 5 Principles of Memorable Logo Design:\n\n1. Simple & Clean\n2. Memorable & Unique\n3. Timeless, not trendy\n4. Versatile (works in any size)\n5. Relevant to your brand\n\nYour logo is your identity!\n\n#LogoDesign #Branding #GraphicDesign",
      category: "Design Education"
    }
  ],
  promotional: [
    {
      title: "Service Showcase",
      content: "✨ Need a stunning WordPress website?\n\nI specialize in:\n🌐 Custom WordPress Development\n🎨 Professional Graphic Design\n📱 Responsive & Mobile-Friendly\n⚡ Fast Loading & SEO Optimized\n\n💼 Let's bring your vision to life!\n\nDM for consultation 📩\n\n#WordPressDeveloper #GraphicDesigner #WebDesign",
      category: "Service Promotion"
    },
    {
      title: "Portfolio Highlight",
      content: "🎨 Recent Project Alert!\n\nJust completed a full website redesign for a local business:\n\n✅ Modern, clean design\n✅ 50% faster load time\n✅ Mobile-optimized\n✅ Increased conversions by 35%\n\nReady to transform your online presence?\n\n#PortfolioShowcase #WordPressDesign #ClientSuccess",
      category: "Portfolio"
    },
    {
      title: "Special Offer",
      content: "🎁 LIMITED TIME OFFER!\n\nGet 20% OFF on:\n• WordPress Website Development\n• Logo Design Packages\n• Complete Branding Services\n\nValid for the next 7 days only!\n\n📧 DM to claim your discount\n\n#WebDesignOffer #GraphicDesign #SpecialDeal",
      category: "Service Promotion"
    },
    {
      title: "Client Testimonial",
      content: "💬 What My Clients Say:\n\n\"Tehniyat transformed our outdated website into a modern masterpiece! Our traffic increased by 40% in just 2 months. Highly recommended!\"\n\n- Sarah M., E-commerce Owner\n\n🌟 Your success is my mission!\n\nReady to grow? Let's talk! 📩\n\n#ClientTestimonial #WordPressExpert #DesignSuccess",
      category: "Social Proof"
    },
    {
      title: "Behind the Scenes",
      content: "👩‍💻 A Day in the Life:\n\nCurrently working on 3 exciting projects:\n\n☕ Morning: WordPress speed optimization\n🎨 Afternoon: Logo design revisions\n🌙 Evening: Custom theme development\n\nPassionate about creating digital excellence!\n\n#BehindTheScenes #WordPressDesigner #DesignerLife",
      category: "Personal Brand"
    },
    {
      title: "Before & After",
      content: "🔄 TRANSFORMATION TUESDAY!\n\nBEFORE: Slow, outdated website\nAFTER: Modern, lightning-fast design\n\nResults:\n📈 70% faster load time\n📈 3x more engagement\n📈 Beautiful user experience\n\nYour website deserves an upgrade!\n\n#BeforeAfter #WebsiteRedesign #WordPressTransformation",
      category: "Portfolio"
    },
    {
      title: "Service Package",
      content: "📦 COMPLETE BRANDING PACKAGE\n\nWhat you get:\n✨ Custom Logo Design\n✨ Brand Color Palette\n✨ Typography Guide\n✨ Social Media Templates\n✨ Business Card Design\n\nInvestment: Starting at $499\n\n🚀 Build a brand that stands out!\n\nDM for details 📩\n\n#BrandingPackage #GraphicDesign #SmallBusiness",
      category: "Service Promotion"
    },
    {
      title: "Quick Win Offer",
      content: "⚡ WEBSITE AUDIT - FREE!\n\nI'll analyze your WordPress site and provide:\n\n✓ Speed optimization tips\n✓ Design improvement suggestions\n✓ SEO recommendations\n✓ Security checklist\n\nLimited to 5 businesses this week!\n\nComment 'AUDIT' below to claim yours! 👇\n\n#FreeAudit #WordPressHelp #WebsiteOptimization",
      category: "Lead Generation"
    }
  ],
  engagement: [
    {
      title: "Question Post",
      content: "🤔 Quick Question:\n\nWhat's the #1 challenge you face with your website?\n\nA) Slow loading speed\nB) Outdated design\nC) Poor mobile experience\nD) Low conversion rates\n\nComment below! Let me know how I can help. 👇\n\n#WordPress #WebDesign #CommunityEngagement",
      category: "Engagement"
    },
    {
      title: "Poll Post",
      content: "📊 POLL TIME!\n\nWhat's more important for your business website?\n\n🔵 Amazing Design\n🟢 Fast Performance\n🟣 SEO Optimization\n🟡 Mobile Responsiveness\n\nVote in the comments! Can't wait to see your answers!\n\n#WebDesign #BusinessWebsite #YourOpinionMatters",
      category: "Engagement"
    },
    {
      title: "Myth Buster",
      content: "🚫 MYTH: \"I can build a professional website for free\"\n\n✅ REALITY: Free = Generic templates, limited features, ads, no support, poor SEO\n\nInvesting in professional design:\n💰 Increases credibility\n💰 Boosts conversions\n💰 Saves time\n💰 Provides ongoing support\n\nWhat other myths should I bust? 👇\n\n#WebDesignMyths #WordPress #ProfessionalDesign",
      category: "Engagement"
    },
    {
      title: "This or That",
      content: "🎨 DESIGNERS: This or That?\n\nDark Mode 🌙 or Light Mode ☀️\nMinimal 🎯 or Detailed 🎨\nSerif ✍️ or Sans-Serif 📝\nGradients 🌈 or Flat Colors 🎨\n\nComment your preferences!\n\n#GraphicDesign #DesignerLife #ThisOrThat",
      category: "Engagement"
    }
  ]
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('educational');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateContent = () => {
    const templates = contentTemplates[selectedCategory];
    const randomContent = templates[Math.floor(Math.random() * templates.length)];
    setGeneratedContent(randomContent);
    setCopiedIndex(null);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
    },
    header: {
      textAlign: 'center',
      color: 'white',
      marginBottom: '40px',
      paddingTop: '40px',
    },
    title: {
      fontSize: '3rem',
      margin: '0 0 10px 0',
      fontWeight: '800',
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: '0.9',
      fontWeight: '300',
    },
    mainCard: {
      maxWidth: '900px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '1.3rem',
      marginBottom: '15px',
      color: '#333',
      fontWeight: '600',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    categoryButton: {
      padding: '12px 24px',
      border: '2px solid #667eea',
      background: 'white',
      color: '#667eea',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    categoryButtonActive: {
      padding: '12px 24px',
      border: '2px solid #667eea',
      background: '#667eea',
      color: 'white',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    generateButton: {
      width: '100%',
      padding: '18px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.2rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      marginTop: '20px',
    },
    contentDisplay: {
      marginTop: '30px',
      padding: '25px',
      background: '#f8f9fa',
      borderRadius: '12px',
      border: '2px solid #e9ecef',
    },
    contentTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#667eea',
      fontWeight: '700',
    },
    contentCategory: {
      display: 'inline-block',
      padding: '5px 15px',
      background: '#667eea',
      color: 'white',
      borderRadius: '15px',
      fontSize: '0.85rem',
      marginBottom: '15px',
    },
    contentText: {
      fontSize: '1.05rem',
      lineHeight: '1.8',
      color: '#333',
      whiteSpace: 'pre-wrap',
      marginBottom: '20px',
    },
    copyButton: {
      padding: '12px 24px',
      background: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'background 0.3s ease',
    },
    templatesSection: {
      marginTop: '40px',
      paddingTop: '30px',
      borderTop: '2px solid #e9ecef',
    },
    templateGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '15px',
      marginTop: '20px',
    },
    templateCard: {
      padding: '20px',
      background: '#f8f9fa',
      borderRadius: '12px',
      border: '2px solid #e9ecef',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    templateCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)',
    },
    templateCardTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px',
    },
    templateCardCategory: {
      fontSize: '0.85rem',
      color: '#667eea',
      fontWeight: '500',
    },
    footer: {
      textAlign: 'center',
      color: 'white',
      marginTop: '40px',
      paddingBottom: '20px',
      opacity: '0.9',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Tehniyat Usman</h1>
        <p style={styles.subtitle}>WordPress Developer & Graphic Designer</p>
        <p style={styles.subtitle}>Social Media Content Generator</p>
      </div>

      <div style={styles.mainCard}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Select Content Type</h2>
          <div style={styles.buttonGroup}>
            <button
              style={selectedCategory === 'educational' ? styles.categoryButtonActive : styles.categoryButton}
              onClick={() => setSelectedCategory('educational')}
            >
              📚 Educational
            </button>
            <button
              style={selectedCategory === 'promotional' ? styles.categoryButtonActive : styles.categoryButton}
              onClick={() => setSelectedCategory('promotional')}
            >
              💼 Promotional
            </button>
            <button
              style={selectedCategory === 'engagement' ? styles.categoryButtonActive : styles.categoryButton}
              onClick={() => setSelectedCategory('engagement')}
            >
              💬 Engagement
            </button>
          </div>

          <button
            style={styles.generateButton}
            onClick={generateContent}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            ✨ Generate Content
          </button>
        </div>

        {generatedContent && (
          <div style={styles.contentDisplay}>
            <h3 style={styles.contentTitle}>{generatedContent.title}</h3>
            <span style={styles.contentCategory}>{generatedContent.category}</span>
            <div style={styles.contentText}>{generatedContent.content}</div>
            <button
              style={{
                ...styles.copyButton,
                background: copiedIndex === 0 ? '#218838' : '#28a745'
              }}
              onClick={() => copyToClipboard(generatedContent.content, 0)}
            >
              {copiedIndex === 0 ? '✓ Copied!' : '📋 Copy to Clipboard'}
            </button>
          </div>
        )}

        <div style={styles.templatesSection}>
          <h2 style={styles.sectionTitle}>
            {selectedCategory === 'educational' && '📚 Educational Content Templates'}
            {selectedCategory === 'promotional' && '💼 Promotional Content Templates'}
            {selectedCategory === 'engagement' && '💬 Engagement Content Templates'}
          </h2>
          <div style={styles.templateGrid}>
            {contentTemplates[selectedCategory].map((template, index) => (
              <div
                key={index}
                style={styles.templateCard}
                onClick={() => setGeneratedContent(template)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.templateCardTitle}>{template.title}</div>
                <div style={styles.templateCardCategory}>{template.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <p>© 2024 Tehniyat Usman | WordPress & Graphic Design Professional</p>
        <p>Generate engaging content for LinkedIn, Instagram, Facebook & Twitter</p>
      </div>
    </div>
  );
}
