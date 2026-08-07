"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t border-border relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <div className="max-w-lg">
                        <Image
                            src="/logo.png"
                            alt="Kandle Direct Publishing Logo"
                            width={400}
                            height={150}
                            className="mb-4 h-16 md:h-24 w-auto object-contain rounded-lg"
                        />
                        <span className="block text-xs text-gray-500 uppercase tracking-widest mb-3 p-1">Ready to start?</span>
                        <Link href="/contact" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter text-accent hover:opacity-80 transition-colors leading-[0.9] block whitespace-nowrap mt-2">
                            Let&apos;s Make History.
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-20 mt-10 md:mt-0">
                        {/* Column 1: Contact Info */}
                        <div>
                            <address className="not-italic space-y-3 text-sm font-medium text-gray-300">
                                <p>
                                    <a href="tel:+18889213331" className="hover:text-accent transition-colors">+1(888)921 3331</a>
                                </p>
                                <p>
                                    <a href="mailto:info@kandledirectpublishing.com" className="hover:text-accent transition-colors">info@kandledirectpublishing.com</a>
                                </p>
                                <div className="text-gray-400 font-normal pt-1">
                                    <p>31 Gourdon Ct</p>
                                    <p>Lake St. Louis, MO 63367</p>
                                </div>
                            </address>
                        </div>

                        {/* Column 2: Menu */}
                        <div>
                            <h4 className="text-[10px] text-gray-600 uppercase tracking-widest mb-3">Menu</h4>
                            <ul className="space-y-2">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    { name: "Portfolio", href: "/portfolio" },
                                    { name: "Blog", href: "/blog" },
                                    { name: "Contact", href: "/contact" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-accent transition-colors uppercase font-bold text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Socials */}
                        <div>
                            <ul className="space-y-3 mt-7">
                                <li>
                                    <a href="https://www.facebook.com/kandledirectpublishing/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-32 md:w-40 hover:text-accent transition-colors uppercase font-bold text-sm">
                                        Facebook <ArrowUpRight size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/kandledirectpublishing/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-32 md:w-40 hover:text-accent transition-colors uppercase font-bold text-sm">
                                        Instagram <ArrowUpRight size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/kandle-direct-publishing/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-32 md:w-40 hover:text-accent transition-colors uppercase font-bold text-sm">
                                        LinkedIn <ArrowUpRight size={16} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-800 pt-6 pb-2 text-[10px] uppercase tracking-widest text-gray-500">
                    <div className="flex gap-4 mb-3 md:mb-0">
                        <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <span>Terms of Service</span>
                    </div>
                    <p>© {new Date().getFullYear()} Kandle Direct Publishing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
