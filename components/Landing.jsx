import Image from "next/image";
import Link from "next/link";

const Landing = () => {
    return (
        <article>
            <div className="relative">
                <div className="relative mx-auto px-4">
                    <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
                        <div className="flex flex-col lg:pb-6 lg:col-span-2 justify-center">
                            <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl sm:leading-[3.5rem]">
                                DocuCraft
                            </h1>

                            <p className="mt-6 text-base leading-7 text-zinc-700 dark:text-zinc-400">
                                Stop letting a great project be held back by poor
                                documentation. DocuCraft provides the tools to build
                                beautiful, fast, and user-friendly documentation that
                                your users will love.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    href="/docs/introduction"
                                    className="inline-flex justify-center rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                                >
                                    <span>Get Started</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative lg:col-span-3">
                            <Image
                                src="/banner.png"
                                alt="DocuCraft project screenshot"
                                width="1600"
                                height="1280"
                                className="relative z-20 -mb-36 aspect-[853/682] max-w-[630px] rounded-xl bg-zinc-200 shadow-xl shadow-black/5 ring-1 ring-zinc-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Landing;