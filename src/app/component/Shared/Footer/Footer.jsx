import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Qurbani Hat</h2>
                        <p className="text-slate-400 leading-7 text-sm">Qurbani Hat is a simple platform where you can explore Qurbani animals and find suitable animals according to your needs.</p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm text-slate-400">
                            <p>Email: support@qurbanihat.com</p>
                            <p>Phone: +880 1XXX-XXXXXX</p>
                            <p>Location: Cumilla, Bangladesh</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

                        <div className="flex gap-3">
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-700 transition"><FaFacebookF /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-700 transition"><FaInstagram /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-700 transition"><FaYoutube /></Link>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 mt-10 pt-6 text-center">
                    <p className="text-sm text-slate-500">© 2026 Qurbani Hat. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;