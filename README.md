# Accredian Enterprise UI/UX Clone

A high-fidelity clone of the Accredian Enterprise landing page built with Next.js, Tailwind CSS v4, and Framer Motion. This project was developed to closely match the visual design, typography, layout, and responsive behaviors of the provided design screenshots.

## Setup Instructions

To get this project running locally on your machine, follow these steps:

1. **Prerequisites**: Ensure you have Node.js (v20 or higher) installed on your system.
2. **Install Dependencies**: Open your terminal in the project's root directory and run:
   ```bash
   npm install
   ```
3. **Run the Development Server**: Start the local development server by running:
   ```bash
   npm run dev
   ```
4. **View the Application**: Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the cloned landing page.

## Approach Taken

The development of this clone was approached systematically to ensure structural integrity and maintainability:

1. **Modular Component Architecture**: The landing page was broken down into highly cohesive, modular components (e.g., `Navbar`, `Hero`, `HowItWorks`, `Testimonials`) located in `app/components/`. This ensures the code is readable and easily maintainable.
2. **Design Token Alignment**: Global styles (`globals.css`) were configured using Tailwind v4's `@theme` directive to include the exact brand colors (like the primary `#1A73E8`) and the `Inter` font for clean, modern typography.
3. **Responsive Design**: Tailwind CSS utility classes were used to build a layout that adapts seamlessly from mobile devices (`sm:`, `md:`) up to large desktop screens (`lg:`, `xl:`).
4. **Micro-Interactions**: `framer-motion` was integrated to add smooth scroll-reveal animations, hover states, and dynamic elements like the active blue underline in the navigation bar to create a premium feel.
5. **Iterative Refinement**: The design was initially scaffolded based on the live website's structure and then rigorously updated to perfectly match specific screenshots provided by the user, adjusting layouts like the FAQ sidebar and the custom grid structures.

## AI Usage Explanation

AI was heavily leveraged throughout the development lifecycle to accelerate building and ensure high-fidelity matching:
- **Visual Analysis**: An AI browser agent with vision capabilities was used to inspect specific design screenshots (e.g., `a1.png` - `a6.png`, and navbar screenshots). The AI accurately extracted specific UI details such as heavy blue left borders on cards, snap-scrolling carousels, and complex split-layout designs for the FAQ section.
- **Content Extraction**: AI tools were utilized to fetch the initial raw HTML from the live site and parse it into structured copy, ensuring the clone used accurate real-world wording without manual copy-pasting.
- **Code Generation & Refactoring**: AI iteratively generated the React/Next.js components, applied complex Tailwind CSS utility structures, and rapidly refactored components (like updating the `Navbar` to remove specific buttons and adjust font sizes based on user feedback).

## Improvements with More Time

If given more time, the following improvements would be implemented to elevate the application further:
1. **Accessibility (a11y) Audit**: Enhance ARIA attributes, ensure proper contrast ratios across all states, and implement comprehensive keyboard navigation support (especially for the mobile menu and FAQ accordion).
2. **Dynamic Data Integration**: Move hardcoded content (like Testimonials, Course Lists, and FAQs) into a headless CMS or a structured JSON configuration file. This would make the site scalable and easily updatable by non-developers.
3. **Advanced Animations**: Add more complex scroll-tied animations (like parallax effects on the hero background or progressive reveal sequences on the Client logos) to match elite marketing sites.
4. **Testing Suite**: Implement unit tests (using Jest/React Testing Library) for interactive components like the Navbar, and E2E tests (using Playwright) to guarantee critical user flows don't break during future updates.
5. **Asset Optimization**: Replace current CSS placeholders with actual branded SVG assets and utilize the Next.js `<Image />` component for optimal loading performance.

---

<details>
<summary>Original Content Reference</summary>

## 1. Header & Navigation
*   **Logo**: Accredian (credentials that matter)
*   **Navigation Links**:
    *   Home
    *   Stats
    *   Clients
    *   Accredian Edge
    *   CAT (Competency Assessment Tool)
    *   How It Works
    *   FAQs
    *   Testimonials

## 2. Hero Section
*   **Main Heading**: Next-Gen Expertise For Your Enterprise
*   **Sub-heading**: Cultivate high-performance teams through expert learning.
*   **Key Value Props**:
    *   Tailored Solutions
    *   Industry Insights
    *   Expert Guidance
*   **Primary CTA**: Enquire Now (Button)

## 3. Our Track Record (Stats)
*   **10K+**: Professionals trained across various domains.
*   **200+**: Sessions delivered to leading organizations.
*   **5K+**: Active learners engaged in our programs.

## 4. Trusted by Industry Leaders (Clients)
*   Reliance Industries Limited
*   HCL
*   IBM
*   CRIF
*   ADP
*   Bayer

## 5. The Accredian Edge
*   **Expert Guidance**: Learn from industry leaders with real-world success.
*   **Advanced Technology**: State-of-the-art LMS for seamless learning experiences.
*   **Proven Impact**: Trusted by leading organizations for measurable ROI.

### Domain Expertise & Specialized Programs
*   **Product & Innovation Hub**: Strategies for product-led growth and innovation.
*   **Gen-AI Mastery**: Future-proofing teams with Generative AI skills.
*   **Leadership Elevation**: Building next-gen leaders for organizational success.
*   **Tech & Data Insights**: Harnessing data and technology for better decision-making.
*   **Operations Excellence**: Streamlining processes for maximum efficiency.
*   **Digital Enterprise**: Navigating the digital transformation journey.

## 6. Tailored Course Segmentation
*   **Program Specific**: Certificate, Executive, Post Graduate Certificate.
*   **Industry Specific**: IT, Healthcare, Retail, Finance, Education, Manufacturing.
*   **Skills Specific**: Leadership, Tech, Operations, Marketing, HR.

## 7. CAT (Competency Assessment Tool) Framework
*   **Concept**: Foundational knowledge for deep subject understanding.
*   **Application**: Practical implementation through real-world scenarios.
*   **Tools**: Resources and techniques for effective skill mastery.

## 8. How We Deliver Results (Three-Step Approach)
1.  **Skill Gap Analysis**: Assess team skill gaps and developmental needs.
2.  **Customized Training Plan**: Create a tailored roadmap addressing organizational goals.
3.  **Flexible Program Delivery**: Deliver adaptable programs aligned with industry and organizational needs.

## 9. Testimonials & FAQs
*   **Testimonials**: Featured success stories from professionals and organizations.
*   **FAQs**:
    *   *What domain specializations are available?* (Detailed list of programs).

## 10. Final Call-to-Action
*   **Text**: Want to Learn More About Our Training Solutions? Get Expert Guidance for Your Team’s Success!
*   **Secondary CTA**: Contact Us (Button)

## 11. Footer
*   **About**: Links to About Us, Blog, Why Accredian.
*   **Social Media**: Facebook, LinkedIn, Twitter (X), Instagram, YouTube.
*   **Contact Information**:
    *   **Email**: enterprise@accredian.com
    *   **Address**: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana.
</details>
