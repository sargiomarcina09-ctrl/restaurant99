@import "tailwindcss";

:root {
  --background: #060504;
  --foreground: #fffaf0;
  --gold: #d8aa4f;
  --gold-bright: #f6d98d;
  --wine: #4f1016;
  --olive: #5b6a35;
  --ink: #0b0907;
  --line: rgba(255, 250, 240, 0.14);
  --glass: rgba(18, 15, 12, 0.62);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--background);
}

body {
  margin: 0;
  background:
    radial-gradient(circle at 18% 12%, rgba(216, 170, 79, 0.16), transparent 32rem),
    radial-gradient(circle at 86% 38%, rgba(79, 16, 22, 0.2), transparent 34rem),
    linear-gradient(180deg, #060504 0%, #0d0906 48%, #070604 100%);
  color: var(--foreground);
  font-family: var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
}

button,
input,
select,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 3px;
  transform-origin: left;
  background: linear-gradient(90deg, #fff4c4, var(--gold), #8f5f1a);
}

.nav-glass {
  position: fixed;
  top: 18px;
  left: 50%;
  z-index: 90;
  display: flex;
  width: min(1120px, calc(100% - 32px));
  min-height: 64px;
  transform: translateX(-50%);
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(8, 7, 5, 0.76);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.38);
  padding: 10px 12px 10px 20px;
  backdrop-filter: blur(22px);
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: #fffaf0;
  font-size: 15px;
  font-weight: 750;
  text-decoration: none;
  white-space: nowrap;
}

.brand-mark span {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid rgba(216, 170, 79, 0.56);
  border-radius: 50%;
  background: linear-gradient(145deg, #2c2110, #d8aa4f);
  color: #080604;
  font-family: Georgia, serif;
  font-size: 14px;
  font-weight: 900;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a,
.footer-links a {
  color: rgba(255, 250, 240, 0.68);
  font-size: 13px;
  text-decoration: none;
  transition: color 180ms ease;
}

.nav-links a:hover,
.footer-links a:hover {
  color: var(--gold-bright);
}

.nav-cta,
.gold-button,
.ghost-button,
.card-actions button,
.order-card button,
.newsletter button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border-radius: 999px;
  text-decoration: none;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.nav-cta,
.gold-button,
.newsletter button {
  border: 1px solid rgba(255, 244, 196, 0.45);
  background: linear-gradient(135deg, #fff0ad, #d8aa4f 42%, #7a5417);
  color: #090705;
  box-shadow: 0 16px 36px rgba(216, 170, 79, 0.22);
  font-size: 14px;
  font-weight: 800;
  padding: 0 20px;
}

.gold-button:hover,
.nav-cta:hover,
.newsletter button:hover {
  transform: translateY(-2px);
}

.ghost-button {
  border: 1px solid rgba(255, 250, 240, 0.2);
  background: rgba(255, 250, 240, 0.05);
  color: #fffaf0;
  font-size: 14px;
  font-weight: 750;
  padding: 0 18px;
}

.ghost-button:hover {
  border-color: rgba(216, 170, 79, 0.5);
  background: rgba(216, 170, 79, 0.1);
  transform: translateY(-2px);
}

.hero-section {
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 128px 24px 70px;
  isolation: isolate;
}

.hero-bg,
.hero-bg img,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-bg {
  z-index: -3;
  overflow: hidden;
}

.hero-bg img {
  width: 100%;
  height: 116%;
  object-fit: cover;
  filter: saturate(0.9) brightness(0.58);
}

.hero-overlay {
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(6, 5, 4, 0.96) 0%, rgba(6, 5, 4, 0.58) 44%, rgba(6, 5, 4, 0.92) 100%),
    linear-gradient(180deg, rgba(6, 5, 4, 0.16) 0%, #060504 100%);
}

.hero-content {
  width: min(1040px, 100%);
  margin: 0 auto;
}

.eyebrow,
.section-title span,
.order-head span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold-bright);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.hero-content h1 {
  max-width: 820px;
  margin: 20px 0 18px;
  color: #fffaf0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(4.6rem, 11vw, 10.5rem);
  font-weight: 500;
  line-height: 0.86;
}

.hero-content p {
  max-width: 660px;
  color: rgba(255, 250, 240, 0.78);
  font-size: clamp(1rem, 2vw, 1.24rem);
  line-height: 1.75;
}

.hero-actions,
.hero-stats,
.feature-list,
.chef-awards,
.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.hero-actions {
  margin-top: 32px;
}

.hero-stats {
  margin-top: 54px;
}

.hero-stats div {
  min-width: 150px;
  border-left: 1px solid rgba(216, 170, 79, 0.38);
  padding-left: 18px;
}

.hero-stats strong,
.dash-stats strong {
  display: block;
  color: var(--gold-bright);
  font-family: Georgia, serif;
  font-size: 2.25rem;
  line-height: 1;
}

.hero-stats span,
.dash-stats span {
  color: rgba(255, 250, 240, 0.64);
  font-size: 13px;
}

.floating-dish {
  position: absolute;
  z-index: 2;
  display: grid;
  gap: 10px;
  width: 174px;
  border: 1px solid rgba(255, 250, 240, 0.16);
  border-radius: 24px;
  background: rgba(11, 9, 7, 0.56);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
  padding: 12px;
  backdrop-filter: blur(18px);
}

.floating-dish img {
  height: 120px;
  border-radius: 18px;
  object-fit: cover;
}

.floating-dish span {
  color: rgba(255, 250, 240, 0.8);
  font-size: 13px;
  font-weight: 700;
}

.dish-one {
  right: 8vw;
  bottom: 18vh;
}

.dish-two {
  right: 20vw;
  top: 20vh;
}

.section-shell {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 88px 0;
}

.section-title h2 {
  max-width: 780px;
  margin: 12px 0 24px;
  color: #fffaf0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.2rem, 5vw, 4.8rem);
  font-weight: 500;
  line-height: 0.98;
}

.section-copy {
  max-width: 610px;
  color: rgba(255, 250, 240, 0.72);
  font-size: 1.02rem;
  line-height: 1.8;
}

.signature-grid,
.why-grid,
.about-grid,
.dash-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.food-card,
.order-card,
.glass-form,
.offer-card,
.review-slider article,
.about-grid article,
.why-card,
.lead-table article,
.dash-stats article {
  border: 1px solid var(--line);
  background:
    linear-gradient(145deg, rgba(255, 250, 240, 0.07), rgba(255, 250, 240, 0.02)),
    rgba(16, 13, 10, 0.74);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
}

.food-card {
  overflow: hidden;
  border-radius: 22px;
}

.food-image {
  position: relative;
  overflow: hidden;
}

.food-image img {
  width: 100%;
  height: 290px;
  object-fit: cover;
  transition: transform 500ms ease;
}

.food-card:hover .food-image img {
  transform: scale(1.08);
}

.food-image span,
.masonry span,
.offer-card span {
  position: absolute;
  top: 16px;
  left: 16px;
  border: 1px solid rgba(255, 244, 196, 0.28);
  border-radius: 999px;
  background: rgba(6, 5, 4, 0.66);
  color: var(--gold-bright);
  font-size: 12px;
  font-weight: 800;
  padding: 7px 11px;
  backdrop-filter: blur(12px);
}

.food-body {
  padding: 20px;
}

.food-body > div:first-child,
.order-head,
.dashboard-head,
.totals span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.food-body h3,
.menu-row h3,
.offer-card h3,
.about-grid h3 {
  margin: 0;
  color: #fffaf0;
  font-size: 1.08rem;
}

.food-body strong,
.menu-row strong {
  color: var(--gold-bright);
  white-space: nowrap;
}

.food-body p,
.menu-row p,
.offer-card p,
.about-grid p,
.footer p {
  color: rgba(255, 250, 240, 0.66);
  line-height: 1.65;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 18px;
}

.card-actions button {
  min-width: 44px;
  border: 1px solid rgba(255, 250, 240, 0.14);
  background: rgba(255, 250, 240, 0.07);
  color: #fffaf0;
  padding: 0 14px;
}

.card-actions button:first-child {
  flex: 1;
}

.liked {
  color: #ffd3d3 !important;
}

.split-section,
.reservation-section,
.chef-section,
.offer-review-grid,
.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.75fr);
  gap: 32px;
  align-items: start;
}

.toolbar {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto auto;
  gap: 12px;
  align-items: center;
  margin-bottom: 18px;
}

.search-box,
.select-box,
.coupon,
.glass-form input,
.glass-form select,
.glass-form textarea,
.checkout-box input,
.newsletter input {
  border: 1px solid rgba(255, 250, 240, 0.14);
  background: rgba(255, 250, 240, 0.06);
  color: #fffaf0;
  outline: none;
}

.search-box,
.select-box {
  display: flex;
  min-height: 50px;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  padding: 0 16px;
}

.search-box input,
.select-box select,
.coupon input,
.newsletter input {
  width: 100%;
  border: 0;
  background: transparent;
  color: inherit;
  outline: none;
}

.select-box select option,
.glass-form select option {
  background: #120e0a;
  color: #fffaf0;
}

.segmented {
  display: flex;
  gap: 6px;
  border: 1px solid rgba(255, 250, 240, 0.12);
  border-radius: 999px;
  background: rgba(255, 250, 240, 0.04);
  padding: 5px;
}

.segmented button {
  min-height: 40px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 250, 240, 0.7);
  font-size: 13px;
  font-weight: 750;
  padding: 0 12px;
}

.segmented button.active {
  background: rgba(216, 170, 79, 0.18);
  color: var(--gold-bright);
}

.menu-list {
  display: grid;
  gap: 12px;
}

.menu-row {
  display: grid;
  grid-template-columns: 92px 1fr auto 44px;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 250, 240, 0.12);
  padding: 14px 0;
}

.menu-row img {
  width: 92px;
  height: 92px;
  border-radius: 18px;
  object-fit: cover;
}

.menu-row span {
  color: var(--gold-bright);
  font-size: 12px;
  font-weight: 800;
}

.menu-row button,
.qty button,
.floating-actions a,
.floating-actions button {
  display: grid;
  min-width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(216, 170, 79, 0.34);
  border-radius: 50%;
  background: rgba(216, 170, 79, 0.1);
  color: var(--gold-bright);
}

.order-card,
.glass-form {
  position: sticky;
  top: 104px;
  border-radius: 24px;
  padding: 22px;
}

.order-head svg {
  color: var(--gold-bright);
}

.order-head h2 {
  margin: 7px 0 0;
  font-family: Georgia, serif;
  font-size: 2rem;
}

.cart-lines,
.checkout-box,
.contact-list {
  display: grid;
  gap: 12px;
}

.cart-lines {
  margin: 24px 0;
}

.cart-line {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 12px;
  align-items: center;
}

.cart-line img {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  object-fit: cover;
}

.cart-line strong,
.cart-line span {
  display: block;
  font-size: 13px;
}

.cart-line span {
  color: rgba(255, 250, 240, 0.6);
}

.qty {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gold-bright);
  font-weight: 800;
}

.qty button {
  min-width: 28px;
  height: 28px;
}

.coupon {
  display: grid;
  gap: 8px;
  border-radius: 16px;
  color: rgba(255, 250, 240, 0.65);
  font-size: 12px;
  padding: 12px;
}

.totals {
  display: grid;
  gap: 10px;
  margin: 18px 0;
  color: rgba(255, 250, 240, 0.72);
  font-size: 14px;
}

.totals .grand {
  border-top: 1px solid var(--line);
  color: #fffaf0;
  font-size: 1rem;
  padding-top: 14px;
}

.full {
  width: 100%;
}

.checkout-box input,
.glass-form input,
.glass-form select,
.glass-form textarea,
.newsletter input {
  min-height: 48px;
  border-radius: 16px;
  padding: 0 14px;
}

.checkout-box {
  margin-bottom: 16px;
}

.success-pill,
.confirmation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
  border: 1px solid rgba(141, 212, 151, 0.35);
  border-radius: 999px;
  background: rgba(66, 122, 76, 0.16);
  color: #c8ffd1;
  padding: 10px;
}

.feature-list {
  margin-top: 24px;
}

.feature-list span,
.chef-awards span,
.contact-list span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 250, 240, 0.12);
  border-radius: 999px;
  background: rgba(255, 250, 240, 0.05);
  color: rgba(255, 250, 240, 0.76);
  padding: 10px 14px;
}

.glass-form {
  display: grid;
  gap: 12px;
}

.glass-form textarea {
  min-height: 104px;
  resize: vertical;
  padding: 14px;
}

.two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.confirmation {
  position: absolute;
  inset: auto 22px 22px;
  border-radius: 18px;
  min-height: 58px;
}

.masonry {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.masonry button {
  position: relative;
  min-height: 230px;
  overflow: hidden;
  border: 0;
  border-radius: 22px;
  background: #14100d;
  padding: 0;
}

.masonry .tall {
  grid-row: span 2;
}

.masonry img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}

.masonry button:hover img {
  transform: scale(1.08);
}

.masonry span {
  top: auto;
  bottom: 14px;
}

.chef-section {
  grid-template-columns: 0.8fr 1fr;
  align-items: center;
}

.chef-photo {
  overflow: hidden;
  border: 1px solid rgba(216, 170, 79, 0.18);
  border-radius: 28px;
}

.chef-photo img {
  width: 100%;
  height: 620px;
  object-fit: cover;
}

.chef-awards {
  margin-top: 26px;
}

.why-grid {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.why-card {
  display: grid;
  min-height: 132px;
  place-items: center;
  border-radius: 20px;
  color: var(--gold-bright);
  text-align: center;
  padding: 20px;
}

.why-card span {
  color: #fffaf0;
  font-weight: 800;
}

.offer-review-grid {
  grid-template-columns: 1fr 1fr;
}

.offers,
.review-slider {
  display: grid;
  gap: 14px;
}

.offer-card {
  position: relative;
  overflow: hidden;
  min-height: 170px;
  border-radius: 22px;
  padding: 58px 22px 22px;
}

.offer-card span {
  position: static;
  width: max-content;
  margin-bottom: 16px;
}

.review-slider {
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 1fr);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
}

.review-slider article {
  min-height: 244px;
  border-radius: 22px;
  scroll-snap-align: start;
  padding: 24px;
}

.stars {
  display: flex;
  gap: 4px;
  color: var(--gold-bright);
}

.review-slider p {
  color: rgba(255, 250, 240, 0.72);
  font-size: 1.1rem;
  line-height: 1.6;
}

.about-section {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.about-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.about-grid article {
  min-height: 210px;
  border-radius: 20px;
  padding: 22px;
}

.insta-grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 10px;
}

.insta-grid div {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 18px;
}

.insta-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.insta-grid svg {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #fffaf0;
  filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.6));
}

.dashboard-section {
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(91, 106, 53, 0.18), transparent),
    rgba(255, 250, 240, 0.03);
  padding-inline: 24px;
}

.dashboard-head {
  align-items: end;
}

.dash-stats {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 16px;
}

.dash-stats article {
  border-radius: 18px;
  padding: 20px;
}

.lead-table {
  display: grid;
  gap: 10px;
}

.lead-table article {
  display: grid;
  grid-template-columns: 86px 1fr 120px 1.5fr 120px;
  gap: 12px;
  align-items: center;
  border-radius: 18px;
  padding: 14px;
}

.lead-table span,
.lead-table em {
  color: rgba(255, 250, 240, 0.58);
  font-size: 13px;
  font-style: normal;
}

.lead-table p {
  overflow: hidden;
  margin: 0;
  color: rgba(255, 250, 240, 0.7);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lead-table button {
  min-height: 36px;
  border: 1px solid rgba(216, 170, 79, 0.24);
  border-radius: 999px;
  background: rgba(216, 170, 79, 0.1);
  color: var(--gold-bright);
}

.contact-list {
  align-items: start;
  margin: 24px 0;
}

.contact-list span {
  width: max-content;
}

.map-embed {
  display: grid;
  min-height: 260px;
  place-items: center;
  border: 1px solid rgba(216, 170, 79, 0.18);
  border-radius: 24px;
  background:
    linear-gradient(135deg, rgba(216, 170, 79, 0.1), rgba(79, 16, 22, 0.2)),
    repeating-linear-gradient(45deg, rgba(255, 250, 240, 0.03), rgba(255, 250, 240, 0.03) 1px, transparent 1px, transparent 16px);
  color: var(--gold-bright);
}

.map-embed svg {
  width: 48px;
  height: 48px;
}

.footer {
  display: grid;
  grid-template-columns: 1fr minmax(260px, 420px) 1fr;
  gap: 28px;
  align-items: center;
  border-top: 1px solid var(--line);
  padding: 36px max(24px, calc((100vw - 1180px) / 2));
}

.newsletter {
  display: flex;
  min-height: 54px;
  border: 1px solid rgba(255, 250, 240, 0.13);
  border-radius: 999px;
  background: rgba(255, 250, 240, 0.05);
  padding: 5px;
}

.newsletter input {
  border: 0;
  flex: 1;
}

.footer-links {
  justify-content: end;
}

.floating-actions {
  position: fixed;
  right: 18px;
  bottom: 24px;
  z-index: 80;
  display: grid;
  gap: 10px;
}

.floating-actions a,
.floating-actions button {
  position: relative;
  background: rgba(8, 7, 5, 0.78);
  backdrop-filter: blur(16px);
}

.pulse-dot {
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 250, 240, 0.28);
}

.pulse-dot.on {
  background: #9cffb0;
  box-shadow: 0 0 0 7px rgba(156, 255, 176, 0.13);
}

.whatsapp-float,
.ai-chat {
  position: fixed;
  z-index: 80;
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  text-decoration: none;
}

.whatsapp-float {
  left: 18px;
  bottom: 24px;
  background: #0f8f56;
  color: #fff;
  font-size: 13px;
  font-weight: 850;
  padding: 0 18px;
}

.ai-chat {
  right: 80px;
  bottom: 24px;
  gap: 8px;
  border: 1px solid rgba(255, 250, 240, 0.18);
  background: rgba(8, 7, 5, 0.78);
  color: #fffaf0;
  padding: 0 16px;
  backdrop-filter: blur(16px);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.86);
  padding: 24px;
}

.lightbox img {
  max-height: 86svh;
  border-radius: 24px;
  object-fit: contain;
}

.lightbox button {
  position: absolute;
  top: 24px;
  right: 24px;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid rgba(255, 250, 240, 0.22);
  border-radius: 50%;
  background: rgba(255, 250, 240, 0.08);
  color: #fffaf0;
}

::selection {
  background: var(--gold);
  color: #090705;
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }

  .floating-dish {
    display: none;
  }

  .split-section,
  .reservation-section,
  .chef-section,
  .offer-review-grid,
  .contact-section,
  .footer {
    grid-template-columns: 1fr;
  }

  .toolbar {
    grid-template-columns: 1fr;
  }

  .signature-grid,
  .about-grid,
  .dash-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .why-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .masonry {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .insta-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .lead-table article {
    grid-template-columns: 1fr;
  }

  .order-card,
  .glass-form {
    position: relative;
    top: auto;
  }

  .footer-links {
    justify-content: start;
  }
}

@media (max-width: 640px) {
  .nav-glass {
    top: 10px;
    width: calc(100% - 18px);
    min-height: 58px;
    padding: 8px 9px 8px 12px;
  }

  .brand-mark {
    font-size: 13px;
  }

  .brand-mark span {
    width: 34px;
    height: 34px;
  }

  .nav-cta {
    min-height: 38px;
    padding: 0 13px;
  }

  .hero-section {
    min-height: 92svh;
    place-items: end start;
    padding: 116px 18px 52px;
  }

  .hero-content h1 {
    font-size: clamp(4.2rem, 18vw, 6.8rem);
  }

  .hero-actions a,
  .hero-actions button {
    width: 100%;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin-top: 36px;
  }

  .hero-stats div {
    min-width: 0;
  }

  .section-shell {
    width: min(100% - 28px, 1180px);
    padding: 64px 0;
  }

  .signature-grid,
  .about-grid,
  .dash-stats,
  .why-grid {
    grid-template-columns: 1fr;
  }

  .menu-row {
    grid-template-columns: 72px 1fr 44px;
  }

  .menu-row img {
    width: 72px;
    height: 72px;
  }

  .menu-row strong {
    grid-column: 2;
  }

  .two-col {
    grid-template-columns: 1fr;
  }

  .masonry {
    grid-template-columns: 1fr;
  }

  .insta-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ai-chat {
    right: 68px;
    max-width: 150px;
    font-size: 12px;
  }
}
