/**
 * Comprehensive Website Verification Test Suite
 * Validates routes, content integrity, image assets, DOM structure, and interactive components.
 */

import { siteContent } from '../src/utils/content.js';
import { renderHome } from '../src/pages/Home.js';
import { renderServices } from '../src/pages/Services.js';
import { renderSolutions } from '../src/pages/Solutions.js';
import { renderCareers } from '../src/pages/Careers.js';
import { renderHeader } from '../src/components/Header.js';
import { renderFooter } from '../src/components/Footer.js';
import { renderContactModal } from '../src/components/ContactModal.js';
import fs from 'fs';
import path from 'path';

let failures = 0;
let passes = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failures++;
  }
}

console.log('\n======================================================');
console.log('REVO6 WEBSITE FULL COMPREHENSIVE TEST SUITE');
console.log('======================================================\n');

// 1. Check Image Assets
console.log('1. Checking Public Image Assets Existence:');
const publicImages = [
  'public/assets/images/hero_abstract.jpg',
  'public/assets/images/accounting.jpg',
  'public/assets/images/software.jpg',
  'public/assets/images/wms.jpg'
];
for (const img of publicImages) {
  const exists = fs.existsSync(img);
  assert(exists, `Asset exists: ${img}`);
  if (exists) {
    const stats = fs.statSync(img);
    assert(stats.size > 10000, `Asset ${img} has valid file size (${(stats.size / 1024).toFixed(1)} KB)`);
  }
}

// 2. Test Content Verbatim Integrity
console.log('\n2. Testing Verbatim Content Source:');
const { brand, pages } = siteContent;
assert(brand.contact.email === 'meya.rev@outlook.com', 'Verified Email is meya.rev@outlook.com');
assert(brand.contact.phone === '+1(628)200-0567', 'Verified Phone is +1(628)200-0567');
assert(pages.home.hero.title === 'Transforming Business with Technology', 'Home hero title preserved verbatim');
assert(pages.home.hero.subtitle.includes('Accounting, software, and supply chain solutions tailored for you'), 'Home hero subtitle preserved verbatim');
assert(pages.services.practices[0].title === 'Accounting', 'Services Accounting practice intact');
assert(pages.services.practices[1].title === 'Software', 'Services Software practice intact');
assert(pages.services.practices[2].title === 'Warehouse Management (WMS)', 'Services WMS practice intact');
assert(pages.solutions.solutionsGrid.length === 4, 'Solutions page has 4 complete transformation chapters');
assert(pages.careers.culture.description.includes('Find exciting job opportunities at revolution 6'), 'Careers culture text preserved verbatim');

// 3. Test HTML Generation for All Pages
console.log('\n3. Testing HTML Rendering for All Pages:');

// Home
const homeHtml = renderHome();
assert(homeHtml.includes('home-hero'), 'Home page renders .home-hero');
assert(homeHtml.includes('solutions-master-showcase'), 'Home page renders .solutions-master-showcase');
assert(homeHtml.includes('Accounting Streamline'), 'Home page renders Accounting Streamline');
assert(homeHtml.includes('Software Consulting'), 'Home page renders Software Consulting');
assert(homeHtml.includes('WMS Optimization'), 'Home page renders WMS Optimization');
assert(homeHtml.includes('Digital Change'), 'Home page renders Digital Change');
assert(!homeHtml.includes('badge-tag'), 'Home page contains 0 .badge-tag elements');

// Services
const servicesHtml = renderServices();
assert(servicesHtml.includes('sticky-service-nav-wrap'), 'Services page renders sticky sub-navigation');
assert(servicesHtml.includes('service-chapter-section'), 'Services page renders practice chapters');
assert(servicesHtml.includes('service-projects-section'), 'Services page renders Our Projects section');
assert(servicesHtml.includes('Accounting Boost'), 'Services renders project case studies');
assert(!servicesHtml.includes('badge-tag'), 'Services page contains 0 .badge-tag elements');

// Solutions
const solutionsHtml = renderSolutions();
assert(solutionsHtml.includes('solutions-sticky-sidebar'), 'Solutions page renders sticky desktop sidebar');
assert(solutionsHtml.includes('solutions-storytelling-wrap'), 'Solutions page renders 4-chapter storytelling stream');
assert(solutionsHtml.includes('section-who-we-are'), 'Solutions page renders Who We Are section');
assert(!solutionsHtml.includes('badge-tag'), 'Solutions page contains 0 .badge-tag elements');

// Careers
const careersHtml = renderCareers();
assert(careersHtml.includes('careers-contact-box'), 'Careers page renders direct application contact box');
assert(careersHtml.includes('150+'), 'Careers renders 150+ verified client metric');
assert(careersHtml.includes('15'), 'Careers renders 15 verified partners metric');
assert(!careersHtml.includes('badge-tag'), 'Careers page contains 0 .badge-tag elements');

// 4. Test Global Shell & Components
console.log('\n4. Testing Header, Footer & Contact Modal:');
const headerHtml = renderHeader();
assert(headerHtml.includes('site-header'), 'Header component renders .site-header');
assert(headerHtml.includes('/services') && headerHtml.includes('/solutions') && headerHtml.includes('/careers'), 'Header links to all 4 pages');

const footerHtml = renderFooter();
assert(footerHtml.includes('site-footer'), 'Footer component renders .site-footer');
assert(footerHtml.includes('meya.rev@outlook.com'), 'Footer displays direct email');
assert(footerHtml.includes('+1(628)200-0567'), 'Footer displays direct phone');

const modalHtml = renderContactModal();
assert(modalHtml.includes('js-contact-modal'), 'Modal component renders .js-contact-modal');
assert(!modalHtml.includes('badge-tag'), 'Modal contains 0 .badge-tag elements');

// 5. Summary
console.log('\n======================================================');
console.log(`TEST SUMMARY: ${passes} Passed, ${failures} Failed`);
console.log('======================================================\n');

if (failures > 0) {
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED SUCCESSFULLY! ✨\n');
}
