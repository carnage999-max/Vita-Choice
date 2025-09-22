import React from 'react';
import Image from 'next/image';

export default function ProofBenefits() {
    const benefits = [
        {
            icon: '/images/dna-molecule.png', // Placeholder for DNA/molecular structure icon
            title: 'Fully Methylated Forms',
            description: 'Superior bioavailability with methylfolate (5-MTHF) and methylcobalamin. No genetic conversion barriers—your body absorbs what it needs, when it needs it.',
            gradient: 'from-[#2EE6D6] to-[#1dd1c4]',
            glowColor: 'group-hover:shadow-[0_20px_40px_rgba(46,230,214,0.15)]'
        },
        {
            icon: '/images/clean-label.svg', // Placeholder for clean/leaf icon  
            title: 'Clean Label Promise',
            description: 'Gluten-free, zero artificial colors or sweeteners. Pure, potent ingredients without the fillers. What you see is what your body gets.',
            gradient: 'from-[#2ECC71] to-[#27ae60]',
            glowColor: 'group-hover:shadow-[0_20px_40px_rgba(46,204,113,0.15)]'
        },
        {
            icon: '/images/vegan.png', // Placeholder for shield/plant-based icon
            title: 'Vegan-Friendly Science',
            description: 'Plant-based excellence without compromise. Every ingredient is ethically sourced and scientifically validated for maximum efficacy.',
            gradient: 'from-[#2EA7FF] to-[#2980b9]',
            glowColor: 'group-hover:shadow-[0_20px_40px_rgba(46,167,255,0.15)]'
        },
        {
            icon: '/images/global-shipping.png', // Placeholder for globe/shipping icon
            title: 'Global Shipping & Guarantee',
            description: 'Worldwide delivery with full money-back guarantee. Premium nutrition shouldn\'t have borders—we ship excellence everywhere.',
            gradient: 'from-[#F5A623] to-[#f39c12]',
            glowColor: 'group-hover:shadow-[0_20px_40px_rgba(245,166,35,0.15)]'
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#0B0C0E] to-[#14161A]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-18">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                        Science-Backed Excellence
                    </h2>
                    <p className="text-lg text-[#B7C0CD] max-w-2xl mx-auto">
                        Every formula is engineered with precision, backed by research, and built for your body's optimal performance.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`group bg-[#14161A] rounded-2xl p-8 border border-[#262A31] 
                         relative overflow-hidden transition-all duration-300 ease-out
                         hover:border-[#2EE6D6] hover:-translate-y-2 ${benefit.glowColor}`}
                        >
                            {/* Top gradient line */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Background glow effect */}
                            <div className="absolute -top-1/2 -right-1/2 w-24 h-24 bg-gradient-radial 
                            from-[#2EE6D6]/10 to-transparent rounded-full opacity-0 
                            group-hover:opacity-100 group-hover:scale-300 transition-all duration-500" />

                            {/* Icon */}
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br  
                              flex items-center justify-center mb-6 relative z-10`}>
                                <Image
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    width={72}
                                    height={72}
                                    className="text-white"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3 relative z-10">
                                {benefit.title}
                            </h3>
                            <p className="text-[#B7C0CD] leading-relaxed relative z-10">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Visual Element - Similar to your reference image */}
                <div className="mt-24 text-center">
                    <div className='mb-0'>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#F5F7FA] mb-4">
                            Experience the Vita-Choice Difference
                        </h2>
                        <p className="text-lg text-[#B7C0CD] max-w-2xl mx-auto">
                            Elevate your wellness journey with our meticulously crafted, science-driven supplements. Feel the transformation with every drop.
                        </p>

                    </div>
                    <div className="relative inline-flex items-center justify-center">
                        
                        {/* Placeholder for bottle/product visualization like in your image */}

                        <Image
                            src="/images/mini-catalogue.png"
                                alt="Product Bottle"
                                width={600}
                                height={540}
                                className="relative z-10"
                            />
                            
                        {/* </div> */}

                        {/* Floating elements around the product */}
                        <div className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] 
                          rounded-2xl opacity-20 animate-float" />
                          <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] 
                          rounded-2xl opacity-20 animate-float" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#737f78] to-[#27ae60] 
                          rounded-xl opacity-30 animate-float-delayed" />
                        <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-[#F5A623] to-[#f39c12] 
                          rounded-lg opacity-25 animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};