import React from "react";
import {
    MdPets,
    MdHealthAndSafety,
    MdWaterDrop,
    MdAccessTime,
    MdCleanHands,
    MdVolunteerActivism,
    MdRecycling,
    MdKitchen,
} from "react-icons/md";

const tips = [
    {
        number: "01",
        stage: "কুরবানির আগে",
        title: "পশু সুস্থ কিনা দেখুন",
        description:
            "পশুর চোখ, হাঁটাচলা, শরীরের গঠন এবং সামগ্রিক স্বাস্থ্য ভালোভাবে পরীক্ষা করে কিনুন।",
        icon: MdHealthAndSafety,
    },
    {
        number: "02",
        stage: "কুরবানির আগে",
        title: "বয়স ও যোগ্যতা যাচাই করুন",
        description:
            "কুরবানির পশুর বয়স এবং শারীরিক যোগ্যতা নিশ্চিত করে তারপর পশু নির্বাচন করুন।",
        icon: MdPets,
    },
    {
        number: "03",
        stage: "কুরবানির আগে",
        title: "পানি ও খাবারের ব্যবস্থা করুন",
        description:
            "কুরবানির আগে পশুকে পর্যাপ্ত পরিষ্কার পানি এবং উপযুক্ত খাবার দিন।",
        icon: MdWaterDrop,
    },
    {
        number: "04",
        stage: "কুরবানির আগে",
        title: "নিরাপদ জায়গায় রাখুন",
        description:
            "পশুটিকে পরিষ্কার, ছায়াযুক্ত এবং নিরাপদ জায়গায় রাখুন যাতে অপ্রয়োজনীয় চাপ না পড়ে।",
        icon: MdAccessTime,
    },
    {
        number: "05",
        stage: "কুরবানির দিন",
        title: "পরিষ্কার-পরিচ্ছন্নতা নিশ্চিত করুন",
        description:
            "কুরবানির জায়গা, প্রয়োজনীয় সরঞ্জাম এবং আশপাশের পরিবেশ পরিষ্কার রাখুন।",
        icon: MdCleanHands,
    },
    {
        number: "06",
        stage: "কুরবানির দিন",
        title: "অভিজ্ঞ ব্যক্তির সহায়তা নিন",
        description:
            "কুরবানির কাজ সঠিকভাবে সম্পন্ন করার জন্য অভিজ্ঞ ও দক্ষ ব্যক্তির সহায়তা নিন।",
        icon: MdVolunteerActivism,
    },
    {
        number: "07",
        stage: "কুরবানির পরে",
        title: "মাংস পরিষ্কারভাবে সংরক্ষণ করুন",
        description:
            "মাংস পরিষ্কারভাবে ভাগ করে উপযুক্ত পাত্রে রাখুন এবং প্রয়োজন অনুযায়ী সংরক্ষণ করুন।",
        icon: MdKitchen,
    },
    {
        number: "08",
        stage: "কুরবানির পরে",
        title: "বর্জ্য সঠিকভাবে পরিষ্কার করুন",
        description:
            "কুরবানির পর অবশিষ্ট বর্জ্য দ্রুত পরিষ্কার করুন এবং পরিবেশ পরিচ্ছন্ন রাখুন।",
        icon: MdRecycling,
    },
];

const QurbaniTips = () => {
    return (
        <section className="py-20">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                    কুরবানি গাইড
                </p>
                <h2 className="text-4xl font-bold mt-2">
                    কুরবানির প্রয়োজনীয় টিপস
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    পশু কেনা থেকে শুরু করে কুরবানির পর পরিষ্কার-পরিচ্ছন্নতা
                    পর্যন্ত প্রয়োজনীয় কিছু টিপস এক জায়গায়।
                </p>
            </div>

            {/* Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {tips.map((tip) => {
                    const Icon = tip.icon;
                    return (
                        <div
                            key={tip.number}
                            className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition duration-300"
                        >

                            {/* Number */}
                            <span className="absolute top-5 right-5 text-4xl font-bold text-gray-100 group-hover:text-green-100 transition">
                                {tip.number}
                            </span>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-3xl mb-5">
                                <Icon />
                            </div>

                            {/* Stage */}
                            <span className="inline-block text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-3">
                                {tip.stage}
                            </span>

                            {/* Title */}
                            <h3 className="text-lg font-bold mb-2">
                                {tip.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-6">
                                {tip.description}
                            </p>
                            {/* Bottom line */}
                            <div className="mt-5 h-1 w-8 bg-green-500 rounded-full group-hover:w-16 transition-all duration-300" />
                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default QurbaniTips;