import Price from "components/price";
import { getCollectionProducts } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";

export async function BlissHero() {
  const products = await getCollectionProducts({
    collection: "hydrogen",
  });
  const featured = products[0];
  const imageUrl = featured?.featuredImage?.url;

  return (
    <section className="relative isolate flex min-h-[min(88vh,940px)] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-6 md:pb-28 md:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(ellipse_50%_45%_at_100%_50%,rgba(167,139,250,0.22),transparent),radial-gradient(ellipse_50%_45%_at_0%_60%,rgba(56,189,248,0.2),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(45,212,191,0.12),transparent_55%),radial-gradient(ellipse_50%_45%_at_100%_50%,rgba(167,139,250,0.12),transparent),radial-gradient(ellipse_50%_45%_at_0%_60%,rgba(56,189,248,0.1),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-size-[64px_64px] bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] opacity-[0.35] dark:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] dark:opacity-[0.2]"
      />

      <div className="relative z-0 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr),minmax(280px,380px)] lg:items-center lg:gap-16">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6 lg:col-start-1 lg:row-start-1 lg:justify-self-start lg:text-left">
          <div className="relative flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-teal-400 via-cyan-500 to-violet-600 shadow-[0_20px_50px_-12px_rgba(45,212,191,0.45),0_0_0_1px_rgba(255,255,255,0.15)_inset] dark:shadow-[0_20px_50px_-12px_rgba(45,212,191,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
            <span className="font-semibold text-[2.35rem] leading-none tracking-tight text-white drop-shadow-sm">
              B
            </span>
            <span
              aria-hidden
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-teal-200 shadow-[0_0_12px_2px_rgba(45,212,191,0.7)]"
            />
          </div>

          <h1 className="mt-0 flex flex-col items-center gap-1 sm:items-start lg:items-start">
            <span className="bliss-wordmark text-5xl font-bold tracking-[-0.04em] text-transparent sm:text-6xl md:text-7xl">
              Bliss
            </span>
            <span className="text-[clamp(1rem,2.5vw,1.35rem)] font-semibold uppercase tracking-[0.28em] text-neutral-600 dark:text-neutral-300">
              Products
            </span>
          </h1>
        </div>

        <p className="max-w-xl text-balance text-center text-lg text-neutral-600 dark:text-neutral-300 md:text-xl lg:col-start-1 lg:row-start-2 lg:justify-self-start lg:text-left">
          Curated essentials with calm energy — discover pieces that feel as
          good as they look.
        </p>

        {featured && imageUrl ? (
          <Link
            href={`/product/${featured.handle}`}
            prefetch={true}
            className="group mx-auto w-full max-w-[min(100%,380px)] rounded-3xl border border-neutral-200/80 bg-white/70 p-4 shadow-[0_25px_60px_-20px_rgba(15,118,110,0.25)] backdrop-blur-md transition hover:border-teal-300/60 hover:shadow-[0_28px_70px_-18px_rgba(15,118,110,0.35)] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:mx-0 lg:max-w-none dark:border-neutral-700/80 dark:bg-neutral-950/60 dark:hover:border-teal-500/40"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900">
              <Image
                src={imageUrl}
                alt={featured.featuredImage.altText || featured.title}
                width={featured.featuredImage.width}
                height={featured.featuredImage.height}
                className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 380px, 90vw"
                priority
              />
            </div>
            <div className="mt-4 space-y-1 px-1">
              <p className="line-clamp-2 text-left font-medium text-neutral-900 dark:text-white">
                {featured.title}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Price
                  className="text-left text-sm text-neutral-600 dark:text-neutral-400"
                  amount={featured.priceRange.maxVariantPrice.amount}
                  currencyCode={
                    featured.priceRange.maxVariantPrice.currencyCode
                  }
                  currencyCodeClassName="text-neutral-500 dark:text-neutral-500"
                />
                <span className="text-sm font-medium text-teal-600 transition group-hover:text-teal-500 dark:text-teal-400">
                  View product →
                </span>
              </div>
            </div>
          </Link>
        ) : null}

        <div className="flex flex-wrap items-center justify-center gap-3 lg:col-start-1 lg:row-start-3 lg:justify-self-start">
          <Link
            href="/search"
            prefetch={true}
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white shadow-md transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Shop the collection
          </Link>
          <a
            href="#main-catalog"
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white/60 px-8 text-sm font-medium text-neutral-800 backdrop-blur-sm transition hover:border-neutral-400 hover:bg-white/80 dark:border-neutral-600 dark:bg-neutral-900/40 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-900/60"
          >
            See featured picks
          </a>
        </div>
      </div>
    </section>
  );
}
