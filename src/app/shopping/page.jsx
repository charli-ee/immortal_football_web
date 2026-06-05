import PageHero from '@/components/common/PageHero';

export default function Page(){
  return <><PageHero title="Shopping" text="This page is ready as a separate Next.js route and can be expanded with your old website content."/><section className="section"><div className="container cards-3"><div className="news-card"><span className="badge">Frontend</span><h3>Shopping Page</h3><p>Separate component/page structure is ready. Add forms, cards, tables or static data here.</p></div><div className="news-card"><span className="badge">Responsive</span><h3>Mobile Friendly</h3><p>Layout automatically adjusts for mobile, tablet, laptop and desktop screens.</p></div><div className="news-card"><span className="badge">Animated</span><h3>Modern UI</h3><p>Cards, buttons and image sections include smooth hover and entry animations.</p></div></div></section></>
}
