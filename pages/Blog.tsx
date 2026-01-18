import React from 'react';
import Icon from '../components/Icon';

const POSTS = [
    {
        id: 1,
        title: "Kuidas AI muudab klienditeeninduse tulevikku",
        date: "12. Jaanuar 2026",
        category: "Tehisintellekt",
        image: "https://picsum.photos/seed/blog1/800/600",
        excerpt: "Uurime lähemalt, kuidas automatiseerimine ja personaalsed AI-abilised aitavad ettevõtetel pakkuda paremat teenust väiksemate kuludega."
    },
    {
        id: 2,
        title: "5 sammu eduka digitaalse transformatsioonini",
        date: "05. Jaanuar 2026",
        category: "Strateegia",
        image: "https://picsum.photos/seed/blog2/800/600",
        excerpt: "Praktiline teekaart ettevõttejuhtidele, kes soovivad oma äriprotsesse moderniseerida ja konkurentsivõimet tõsta."
    },
    {
        id: 3,
        title: "Andmepõhine turundus: Rohkem kui lihtsalt numbrid",
        date: "28. Detsember 2025",
        category: "Turundus",
        image: "https://picsum.photos/seed/blog3/800/600",
        excerpt: "Kuidas koguda, analüüsida ja rakendada kliendiandmeid viisil, mis toob reaalseid tulemusi ja kasvatab müüki."
    }
];

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = React.useState<typeof POSTS[0] | null>(null);

    return (
        <div className="pt-64 pb-32 min-h-screen bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#44403F] mb-6">Meie Blogi</h1>
                    <p className="text-xl text-gray-600">
                        Viimased uudised, trendid ja teadmised digitaalse kasvu maailmast.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map(post => (
                        <article
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative shrink-0">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="inline-block bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
                                    {post.category}
                                </span>
                                <div className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                                    <Icon name="calendar" size={14} />
                                    {post.date}
                                </div>
                                <h3 className="text-xl font-bold text-[#44403F] mb-3 group-hover:text-brand transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center text-brand font-semibold text-sm group/link">
                                    Loe edasi
                                    <Icon name="arrow-right" size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedPost && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedPost(null)}
                >
                    <div
                        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-zoom-in"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative h-64 md:h-80">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-6 right-6 bg-white/90 p-2 rounded-full hover:bg-white transition-colors shadow-lg cursor-pointer z-10"
                            >
                                <Icon name="x" size={24} className="text-gray-900" />
                            </button>
                        </div>

                        <div className="p-8 md:p-12">
                            <span className="inline-block bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-6">
                                {selectedPost.category}
                            </span>

                            <div className="flex items-center gap-2 text-gray-500 mb-4 font-medium">
                                <Icon name="calendar" size={18} />
                                {selectedPost.date}
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#44403F] mb-8 leading-tight">
                                {selectedPost.title}
                            </h2>

                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p className="lead text-xl md:text-2xl text-gray-500 font-light mb-8">
                                    {selectedPost.excerpt}
                                </p>
                                <p className="mb-6">
                                    Siia tuleks blogipostituse täispikk sisu. Kuna see on hetkel demopostitus, siis on siin vaid lühike kokkuvõte. Päris lahenduses oleks siin põhjalik tekst, vahepealkirjad, pildid ja muu rikkalik sisu.
                                </p>
                                <p className="mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h3 className="text-2xl font-bold text-[#44403F] mb-4 mt-8">Kokkuvõte</h3>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
