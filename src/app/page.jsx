import HeroSection from '@/components/home/HeroSection';
import IntroStrip from '@/components/home/IntroStrip';
import AboutPreview from '@/components/home/AboutPreview';
import LegacySection from '@/components/home/LegacySection';
import Achievements from '@/components/home/Achievements';
import TermsSection from '@/components/home/TermsSection';
import MatchesPreview from '@/components/home/MatchesPreview';
import GalleryPreview from '@/components/home/GalleryPreview';

export default function Home(){
    return <>
    <HeroSection/>
    <IntroStrip/>
    <AboutPreview/>
    <LegacySection/>
    <Achievements/>
    <MatchesPreview/>
    <GalleryPreview/>
    <TermsSection/>
    </>
}
