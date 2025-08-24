import { Star } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import Marquee from './ui/marquee';
import SectionBadge from './ui/section-badge';
import TerminalSection from './terminal';


const Terminal = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="DeepUbuntuAV Data Processing" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
                        Frontier AV Research
                        
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Advancing autonomous vehicles with diverse datasets, synthetic simulations, and novel perception algorithms.
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="relative">
                    <div className="absolute -left-1 top-0 w-20 h-full bg-gradient-to-r from-[#101010] to-transparent z-10" />
                    <div className="absolute -right-1 top-0 w-20 h-full bg-gradient-to-l from-[#101010] to-transparent z-10" />

                    <TerminalSection/>
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Terminal;
