import { clsx } from 'clsx'
import { Menu, Tab, Transition } from '@headlessui/react'
import Link from 'next/link'
import { forwardRef, Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import { matchSorter } from 'match-sorter'
import { tags } from '@/data/tags'

import { latestVersion, packageName, githubUrl } from '@/data/content'

function importIcons(r, attrs) {
  return r
    .keys()
    .filter((fileName) => fileName.startsWith('./'))
    .map((fileName) => {
      let name = fileName.slice(2).replace(/\.svg$/, '')
      return {
        name,
        tags: tags[name] ?? [],
        svg: r(fileName).default.replace('>', ` ${attrs}>`),
      }
    })
}

const icons1 = importIcons(
  require.context(`wellness-icons/24/outline/`, false, /\.svg$/),
  'class="w-6 h-6"'
)

function Logo(props) {
  return (
    <span className="">
      <svg className="inline-block h-6 w-6 fill-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 514" data-v-5d42b9bc="">
        <path strokeLinecap="round" strokeLinejoin="round" d="M57.907,374.126L72.029,431.186C83.42,471.402 159.457,492.736 246.368,492.736C332.371,492.736 410.326,470.957 420.715,431.186L434.836,374.119C374.672,399.95 310.568,413.157 246.36,413.157C182.168,413.156 118.063,399.949 57.907,374.126Z M302.034,163.472C288.636,162.033 278.463,150.729 278.463,137.259L278.463,137.22C278.463,120.16 283.654,103.675 293.374,89.657C299.773,80.431 303.522,69.231 303.522,57.156C303.523,25.584 277.939,0 246.368,0C214.805,0 189.212,25.584 189.212,57.155C189.212,69.23 192.962,80.43 199.362,89.656C209.049,103.62 214.271,120.224 214.271,137.219L214.271,137.258C214.271,150.76 204.123,162.024 190.701,163.471C104.698,172.754 28.374,203.457 28.374,253.058C28.374,259.935 49.07,338.424 49.07,338.424C173.554,399.327 319.189,399.336 443.672,338.416C443.672,338.416 464.36,259.934 464.36,253.058C464.361,203.458 388.038,172.755 302.034,163.472ZM246.368,31.077C260.998,31.077 272.86,42.937 272.86,57.569C272.86,72.199 260.998,84.061 246.368,84.061C231.737,84.061 219.876,72.199 219.876,57.569C219.877,42.938 231.737,31.077 246.368,31.077ZM246.368,191.963C358.544,191.963 427.425,227.553 427.425,253.059C427.425,278.58 358.545,314.162 246.368,314.162C134.191,314.162 65.31,278.58 65.31,253.059C65.31,227.553 134.191,191.963 246.368,191.963Z" />
      </svg>
      <span className="text-black font-extrabold">
        {packageName}
      </span>
    </span>
  )
}

function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

function Button({ className, ...props }) {
  className = clsx(
    className,
    'rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5'
  )

  if (props.href) {
    return <Link className={className} {...props} />
  }

  return <button className={className} {...props} />
}

function ShareButton({ children = 'Share on Twitter' }) {
  let href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    'Check out Wellness Icons by @saunaworlds 😍'
  )}&url=${encodeURIComponent('https://wellness-icons.saunaworlds.com')}`

  return (
    <Button href={href}>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="h-5 w-5 fill-slate-400"
      >
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84" />
      </svg>
      <span>{children}</span>
    </Button>
  )
}

function Illustration() {
  return (
    <div className="relative aspect-square w-72 flex-none">
      <svg
        viewBox="0 0 288 288"
        fill="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <g>
          <mask
            id="c"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x={-333}
            y={-242}
            width={956}
            height={927}
          >
            <path fill="url(#b)" d="M-333-242h956v927h-956z" />
          </mask>
          <g mask="url(#c)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108-488.25c-155.33 0-281.25 125.92-281.25 281.25C-173.25-51.67-47.33 74.25 108 74.25c155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-186.75-207c0-162.786 131.964-294.75 294.75-294.75S402.75-369.786 402.75-207 270.786 87.75 108 87.75-186.75-44.214-186.75-207Z"
              fill="#94A3B8"
              fillOpacity=".1"
              stroke="#0F172A"
              strokeOpacity=".2"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-36-146.25c-155.33 0-281.25 125.92-281.25 281.25 0 155.33 125.92 281.25 281.25 281.25 155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-330.75 135c0-162.786 131.964-294.75 294.75-294.75S258.75-27.786 258.75 135 126.786 429.75-36 429.75-330.75 297.786-330.75 135Z"
              fill="#94A3B8"
              fillOpacity=".1"
              stroke="#0F172A"
              strokeOpacity=".2"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M342-74.25c-115.566 0-209.25 93.684-209.25 209.25S226.434 344.25 342 344.25 551.25 250.566 551.25 135 457.566-74.25 342-74.25ZM119.25 135c0-123.021 99.729-222.75 222.75-222.75S564.75 11.979 564.75 135 465.021 357.75 342 357.75 119.25 258.021 119.25 135Z"
              fill="#94A3B8"
              fillOpacity=".1"
              stroke="#0F172A"
              strokeOpacity=".2"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M234 114.75c-11.184 0-20.25 9.066-20.25 20.25s9.066 20.25 20.25 20.25 20.25-9.066 20.25-20.25-9.066-20.25-20.25-20.25ZM200.25 135c0-18.64 15.11-33.75 33.75-33.75s33.75 15.11 33.75 33.75-15.11 33.75-33.75 33.75-33.75-15.11-33.75-33.75ZM99 87.75c-26.096 0-47.25 21.155-47.25 47.25S72.904 182.25 99 182.25c26.095 0 47.25-21.155 47.25-47.25S125.095 87.75 99 87.75ZM38.25 135c0-33.551 27.199-60.75 60.75-60.75s60.75 27.199 60.75 60.75-27.199 60.75-60.75 60.75S38.25 168.551 38.25 135Z"
              fill="#94A3B8"
              fillOpacity=".1"
              stroke="#0F172A"
              strokeOpacity=".1"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M342-110.25C206.552-110.25 96.75-.448 96.75 135c0 135.448 109.802 245.25 245.25 245.25 135.448 0 245.25-109.802 245.25-245.25C587.25-.448 477.448-110.25 342-110.25ZM83.25 135C83.25-7.904 199.096-123.75 342-123.75S600.75-7.904 600.75 135 484.904 393.75 342 393.75 83.25 277.904 83.25 135Z"
              fill="#94A3B8"
              fillOpacity=".1"
              stroke="#0F172A"
              strokeOpacity=".2"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108 195.75c-155.33 0-281.25 125.92-281.25 281.25 0 155.33 125.92 281.25 281.25 281.25 155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-186.75 477c0-162.786 131.964-294.75 294.75-294.75S402.75 314.214 402.75 477 270.786 771.75 108 771.75-186.75 639.786-186.75 477Z"
              fill="#94A3B8"
              fillOpacity=".1"
              stroke="#0F172A"
              strokeOpacity=".2"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
          </g>
        </g>
        <defs>
          <radialGradient
            id="b"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-492.00038 6.00263 -6.1904 -507.39124 188 139)"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset=".81" stopColor="#D9D9D9" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px]" />
      <svg
        viewBox="0 0 288 288"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M232.213 29.661a6.75 6.75 0 0 1 8.659 4.019 293.104 293.104 0 0 1 4.671 13.82 293.554 293.554 0 0 1 12.249 63.562c6.142 6.107 9.958 14.579 9.958 23.938 0 9.359-3.816 17.831-9.958 23.938a293.551 293.551 0 0 1-12.249 63.562 293.143 293.143 0 0 1-4.671 13.82 6.75 6.75 0 0 1-12.678-4.64c.937-2.56 1.838-5.137 2.702-7.731a279.258 279.258 0 0 0-88.553-26.124 207.662 207.662 0 0 0 8.709 22.888c4.285 9.53 1.151 21.268-8.338 26.747l-7.875 4.547c-9.831 5.675-22.847 2.225-27.825-8.542a256.906 256.906 0 0 1-16.74-48.337C60.857 190.897 38.25 165.588 38.25 135c0-33.551 27.199-60.75 60.75-60.75h9c8.258 0 16.431-.356 24.505-1.052 35.031-3.023 68.22-12.466 98.391-27.147a278.666 278.666 0 0 0-2.702-7.73 6.75 6.75 0 0 1 4.019-8.66Zm2.681 29.45a292.862 292.862 0 0 1-96.423 27.083c-3.74 15.652-5.721 31.994-5.721 48.806 0 16.812 1.981 33.154 5.721 48.806a292.884 292.884 0 0 1 96.423 27.083 280.39 280.39 0 0 0 9.636-55.608c.477-6.697.72-13.46.72-20.281 0-6.821-.243-13.584-.72-20.281a280.396 280.396 0 0 0-9.636-55.608ZM124.37 182.697A223.556 223.556 0 0 1 119.25 135c0-16.365 1.766-32.325 5.12-47.697a299.37 299.37 0 0 1-16.37.447h-9c-26.096 0-47.25 21.155-47.25 47.25S72.904 182.25 99 182.25h9c5.492 0 10.95.15 16.37.447Zm-20.039 13.053a243.387 243.387 0 0 0 14.937 42.049c1.434 3.103 5.418 4.481 8.821 2.516l7.875-4.547c3.054-1.763 4.429-5.84 2.775-9.519a221.156 221.156 0 0 1-10.907-29.811A285.523 285.523 0 0 0 108 195.75h-3.669Z"
          fill="#A78BFA"
          fillOpacity=".1"
          stroke="#8B5CF6"
          strokeWidth={2}
        />
        <g mask="url(#cc)">
          <path
            opacity=".1"
            d="M-69 287.5h445"
            stroke="url(#e)"
            strokeWidth="1.5"
          />
          <path
            opacity=".1"
            d="M-69 0h445"
            stroke="url(#f)"
            strokeWidth="1.5"
          />
          <path
            opacity=".1"
            d="M.25 355V-90"
            stroke="url(#g)"
            strokeWidth="1.5"
          />
          <path
            opacity=".1"
            d="M287.75 355V-90"
            stroke="url(#h)"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <linearGradient
            id="e"
            x1="375.75"
            y1="296.754"
            x2="-69.25"
            y2="296.754"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0F172A" stopOpacity={0} />
            <stop offset=".258" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset=".521" stopColor="#0F172A" />
            <stop offset=".784" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset={1} stopColor="#0F172A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="f"
            x1="375.75"
            y1="9.254"
            x2="-69.25"
            y2="9.254"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0F172A" stopOpacity={0} />
            <stop offset=".258" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset=".521" stopColor="#0F172A" />
            <stop offset=".784" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset={1} stopColor="#0F172A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="g"
            x1="9.504"
            y1="-89.75"
            x2="9.504"
            y2="355.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0F172A" stopOpacity={0} />
            <stop offset=".258" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset=".521" stopColor="#0F172A" />
            <stop offset=".784" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset={1} stopColor="#0F172A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="h"
            x1="297.004"
            y1="-89.75"
            x2="297.004"
            y2="355.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0F172A" stopOpacity={0} />
            <stop offset=".258" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset=".521" stopColor="#0F172A" />
            <stop offset=".784" stopColor="#0F172A" stopOpacity=".6" />
            <stop offset={1} stopColor="#0F172A" stopOpacity={0} />
          </linearGradient>
          <mask
            id="cc"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x={-333}
            y={-242}
            width={956}
            height={927}
          >
            <path fill="url(#b)" d="M-333-242h956v927h-956z" />
          </mask>
        </defs>
      </svg>
    </div>
  )
}

function Header() {
  return (
    <header className="relative overflow-hidden bg-slate-50 pt-6">
      <Image
        src={require('@/images/beams.jpg')}
        alt=""
        className="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
        priority
        unoptimized
      />
      <div className="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]" />
      <Container className="relative">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-7" />
            <Menu as="div" className="relative">
              <Menu.Button
                aria-label="Version"
                className="flex items-center rounded-full border border-slate-700/10 bg-slate-100 py-1.5 pl-2.5 pr-3 text-xs font-semibold text-slate-500 transition hover:border-slate-700/20"
              >
                v{latestVersion}
                <svg viewBox="0 0 6 3" className="ml-2 w-1.5 overflow-visible">
                  <path
                    d="M0 0L3 3L6 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="absolute top-full mt-1 w-40 rounded-lg bg-white py-2 text-sm font-semibold leading-6 text-slate-700 shadow ring-1 ring-slate-900/5">
                <Menu.Item disabled>
                  <span className="flex items-center justify-between px-3 py-1 text-orange-500">
                    v{latestVersion}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        d="m7.75 12.75 2.25 2.5 6.25-6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <ShareButton>
            Share<span className="sr-only sm:not-sr-only"> on Twitter</span>
          </ShareButton>
        </div>
        <div className="flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left">
          <div className="flex max-w-[37rem] flex-col py-16 lg:pt-12 lg:pb-11">
            <h1 className="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl">
              Sauna and Wellness SVG icons.
            </h1>
            <div className="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
              <p>{`${icons1.length} icons`}</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p>MIT license</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p>React &amp; Vue libraries</p>
            </div>
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              <Button href={githubUrl}>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-900"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                  />
                </svg>
                Documentation
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-auto lg:justify-center">
            <Illustration />
          </div>
        </div>
      </Container>
    </header>
  )
}

function Glow(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 384 12" fill="none" aria-hidden="true" {...props}>
      <mask
        id={`${id}-a`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={48}
        y={0}
        width={269}
        height={4}
      >
        <path
          transform="rotate(180 316.656 4)"
          fill="#C4C4C4"
          d="M316.656 4h268v4h-268z"
        />
      </mask>
      <g filter={`url(#${id}-b)`} mask={`url(#${id}-a)`}>
        <path
          transform="rotate(180 292.656 1)"
          fill={`url(#${id}-c)`}
          d="M292.656 1h220v2h-220z"
        />
      </g>
      <mask
        id={`${id}-d`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={116}
        y={0}
        width={268}
        height={12}
      >
        <path
          transform="rotate(180 384 12)"
          fill="#C4C4C4"
          d="M384 12h268v12H384z"
        />
      </mask>
      <g filter={`url(#${id}-e)`} mask={`url(#${id}-d)`}>
        <path
          transform="rotate(180 360 1)"
          fill={`url(#${id}-f)`}
          d="M360 1h220v2H360z"
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-c`}
          x1="292.656"
          y1={1}
          x2="512.656"
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={`${id}-f`}
          x1={360}
          y1={1}
          x2={580}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <filter
          id={`${id}-b`}
          x="71.656"
          y={-2}
          width={222}
          height={4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
        <filter
          id={`${id}-e`}
          x={131}
          y={-10}
          width={238}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="4.5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
      </defs>
    </svg>
  )
}

function Icon({ icon }) {
  const [state, setState] = useState('idle')
  const [activeType, setActiveType] = useState(null)

  function copy(as) {
    if (state === 'copied') return

    let text = icon.svg
      .replace(' aria-hidden="true"', '')
      .replace(/"\/>/g, '" />')

    if (as === 'jsx') {
      text = text
        .replace(/class="/g, 'className="')
        .replace(
          /(\s[a-z]+)-([a-z])/g,
          (_, prefix, letter) => `${prefix}${letter.toUpperCase()}`
        )
        .replace(/="([0-9.]+)"/g, (_, value) => `={${value}}`)
    }

    navigator.clipboard.writeText(text).then(() => {
      setState('copied')
    })
  }

  function activate() {
    if (state === 'idle') {
      setState('active')
    }
  }

  function deactivate() {
    if (state === 'active') {
      setState('idle')
      setActiveType(null)
    }
  }

  function onKeyDown(e) {
    if (['Enter', ' ', 'ArrowUp', 'ArrowDown', 'Escape'].includes(e.key)) {
      e.preventDefault()
    }
    if (state === 'active' && e.key === 'Escape') {
      setState('idle')
      setActiveType(null)
    } else if (
      state === 'idle' &&
      ['Enter', ' ', 'ArrowDown'].includes(e.key)
    ) {
      setState('active')
      setActiveType('svg')
    } else if (activeType === 'svg' && e.key === 'ArrowDown') {
      setActiveType('jsx')
    } else if (activeType === 'jsx' && e.key === 'ArrowUp') {
      setActiveType('svg')
    } else if (
      state === 'active' &&
      activeType &&
      ['Enter', ' '].includes(e.key)
    ) {
      copy(activeType)
    }
  }

  useEffect(() => {
    if (state === 'copied') {
      let handle = window.setTimeout(() => {
        setState('idle')
      }, 1000)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [state])

  return (
    <div onMouseEnter={activate} onMouseLeave={deactivate}>
      <div className="relative h-[8.5rem]">
        <button
          type="button"
          onKeyDown={onKeyDown}
          onBlur={() => {
            window.setTimeout(() => {
              deactivate()
            }, 0)
          }}
          id={`${icon.name}-btn`}
          aria-label={icon.name}
          aria-haspopup="true"
          aria-controls={icon.name}
          aria-expanded={state === 'active'}
          className="absolute inset-0 flex h-full w-full cursor-auto items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08]"
        >
          <span
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            className={clsx(
              'transition-transform',
              state === 'copied'
                ? '-translate-y-3 duration-200 ease-out'
                : 'duration-500 ease-in-out'
            )}
          />
        </button>
        <Transition
          as={Fragment}
          show={state === 'copied'}
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="absolute inset-x-0 bottom-10 text-center text-[0.8125rem] font-semibold leading-6 text-orange-500">
            Copied!
          </p>
        </Transition>
        <Transition
          as={Fragment}
          show={state === 'active'}
          enter="transition-opacity duration-100 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            id={icon.name}
            role="menu"
            aria-labelledby={`${icon.name}-btn`}
            aria-activedescendant={
              activeType ? `${icon.name}-${activeType}` : undefined
            }
            className={clsx(
              'absolute inset-0 grid grid-cols-1 grid-rows-2 gap-1 p-1',
              state !== 'active' && 'pointer-events-none'
            )}
          >
            <div
              id={`${icon.name}-svg`}
              role="menuitem"
              className={clsx(
                'flex cursor-pointer items-center justify-center rounded-lg bg-slate-50/[0.94] text-[0.8125rem] font-semibold text-slate-500',
                activeType === 'svg' && 'bg-slate-200/80'
              )}
              onMouseEnter={() => setActiveType('svg')}
              onMouseLeave={() => setActiveType(undefined)}
              onClick={() => copy('svg')}
            >
              Copy SVG
            </div>
            <div
              id={`${icon.name}-jsx`}
              role="menuitem"
              className={clsx(
                'flex cursor-pointer items-center justify-center rounded-lg bg-slate-50/[0.94] text-[0.8125rem] font-semibold text-slate-500',
                activeType === 'jsx' && 'bg-slate-200/80'
              )}
              onMouseEnter={() => setActiveType('jsx')}
              onMouseLeave={() => setActiveType(undefined)}
              onClick={() => copy('jsx')}
            >
              Copy JSX
            </div>
          </div>
        </Transition>
      </div>
      <div className="mt-3 truncate text-center text-[0.8125rem] leading-6 text-slate-500" title={icon.name}>
        {icon.name}
      </div>
    </div>
  )
}

const TabList = forwardRef(function TabList(
  { enabled = true, selectedIndex },
  ref
) {
  let List = enabled ? Tab.List : 'div'
  let Item = enabled ? Tab : 'div'

  return (
    <List
      ref={ref}
      aria-hidden={!enabled}
      className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:pt-12"
    >
      {[
        [
          'Outline',
          '24x24, 1.5px stroke',
          'For primary navigation and marketing sections, with an outlined appearance.',
        ],
      ].map(([type, details, description], index) => (
        <div
          key={type}
          className={clsx(
            'relative rounded-xl p-6 text-sm leading-6 transition',
            selectedIndex === index
              ? 'shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-600/[0.04]'
              : 'hover:bg-slate-50'
          )}
        >
          <h2>
            <Item className="flex gap-2 transition [&:not(:focus-visible)]:focus:outline-none">
              <span className="absolute inset-0 rounded-xl" />
              <span
                className={clsx(
                  'font-semibold',
                  selectedIndex === index ? 'text-orange-500' : 'text-slate-900'
                )}
              >
                {type}
              </span>
              <span className="hidden text-slate-400 lg:block">{details}</span>
            </Item>
          </h2>
          <p className="mt-1 text-slate-500">{description}</p>
          <Glow
            className={clsx(
              'absolute top-full right-0 w-[384px] max-w-[120%] transition',
              selectedIndex !== index && 'opacity-0'
            )}
          />
        </div>
      ))}
    </List>
  )
})

function TabListSmall({ enabled = true, selectedIndex }) {
  let List = enabled ? Tab.List : 'div'
  let Item = enabled ? Tab : 'div'

  return (
    <List
      aria-hidden={!enabled}
      className="grid grid-cols-1 gap-0.5 rounded-lg bg-slate-400/10 text-center text-[0.8125rem] font-semibold leading-6 text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/5"
    >
      {['Outline'].map((type, typeIndex, types) => (
        <Item
          key={type}
          className={clsx(
            'py-2 px-6 transition focus:z-10 [&:not(:focus-visible)]:focus:outline-none',
            typeIndex === 0 && 'rounded-l-lg',
            typeIndex === types.length - 1 && 'rounded-r-lg',
            selectedIndex === typeIndex
              ? 'bg-slate-50 text-orange-500'
              : 'bg-white hover:bg-slate-50 hover:text-slate-700'
          )}
        >
          {type}
        </Item>
      ))}
    </List>
  )
}

function useMediaQuery(query) {
  let [matches, setMatches] = useState(null)

  useEffect(() => {
    let matchMedia = window.matchMedia(query)

    function handleChange() {
      setMatches(matchMedia.matches)
    }

    handleChange()
    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

function Blur(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 1140 34" fill="none" {...props}>
      <g opacity=".6" filter={`url(#${id}-a)`}>
        <path fill={`url(#${id}-b)`} d="M6 6h1128v22H6z" />
        <path fill={`url(#${id}-c)`} d="M6 6h1128v22H6z" />
      </g>
      <defs>
        <radialGradient
          id={`${id}-c`}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -22 1128 0 563 28)"
        >
          <stop offset=".273" stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={`${id}-b`}
          x1={6}
          y1={6}
          x2={1134}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <filter
          id={`${id}-a`}
          x={0}
          y={0}
          width={1140}
          height={34}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={3}
            result="effect1_foregroundBlur_311_43535"
          />
        </filter>
      </defs>
    </svg>
  )
}

function Icons({ icons, query }) {
  let filteredIcons = query
    ? matchSorter(icons, query.replace(/\s+/, '-'), { keys: ['name', 'tags'] })
    : icons

  if (query && filteredIcons.length === 0) {
    return (
      <div className="flex flex-col items-center py-20 text-sm leading-6 text-slate-600 md:py-32 lg:py-40">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            d="m13 13 6 6m0-6-6 6m15-3c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-6">
          We’re sorry we don’t have icons for{' '}
          <span className="font-semibold text-slate-900">{`“${query}”`}</span>.
        </p>
        <p className="mt-1">
          If you can’t find what you’re looking for{' '}
          <Link
            href={githubUrl+'/discussions/new?category=ideas'}
            className="font-semibold text-orange-600"
          >
            make a suggestion on GitHub.
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8 pt-10 pb-16 sm:pt-11 md:pt-12">
      {filteredIcons.map((icon) => (
        <Icon key={icon.name} icon={icon} />
      ))}
    </div>
  )
}

export default function Home() {
  let searchBarRef = useRef()
  let searchInputRef = useRef()
  let tabListRef = useRef()
  let [scrolled, setScrolled] = useState(false)
  let isLg = useMediaQuery('(min-width: 1024px)')

  let [query, setQuery] = useState('')

  useEffect(() => {
    function update() {
      setScrolled(
        window.scrollY >=
          tabListRef.current.offsetTop +
            tabListRef.current.offsetHeight -
            searchBarRef.current.offsetHeight
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update, { passive: true })
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    function onKeyDown(event) {
      let element = event.target
      let tagName = element.tagName
      let isEditingContent =
        element.isContentEditable ||
        tagName === 'INPUT' ||
        tagName === 'SELECT' ||
        tagName === 'TEXTAREA'

      if (
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (event.key === '/' && !isEditingContent)
      ) {
        event.preventDefault()
        searchInputRef.current.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Tab.Group>
          {({ selectedIndex }) => (
            <>
              <div
                ref={searchBarRef}
                className="pointer-events-none sticky top-0 z-50 -mb-10 overflow-hidden pb-10 sm:-mb-11 sm:pb-11 md:-mb-12 md:pb-12"
              >
                <div className="relative">
                  <Blur className="absolute bottom-[-16px] left-1/2 ml-[-570px] w-[1140px]" />
                  <div className="pointer-events-auto relative bg-white pb-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] sm:pb-0">
                    <Container className="flex flex-col sm:flex-row sm:items-center">
                      <div className="relative flex-auto">
                        <input
                          ref={searchInputRef}
                          type="search"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          aria-label="Search all icons"
                          placeholder="Search all icons..."
                          className="block w-full appearance-none rounded-lg bg-transparent py-6 pr-4 pl-9 text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
                        />
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 fill-slate-500 transition"
                        >
                          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                        </svg>
                      </div>
                      <div className="lg:hidden">
                        <TabListSmall
                          enabled={isLg === false}
                          selectedIndex={selectedIndex}
                        />
                      </div>
                      <Transition
                        className="hidden lg:block"
                        show={scrolled}
                        enter="transition-opacity"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <TabListSmall
                          enabled={isLg}
                          selectedIndex={selectedIndex}
                        />
                      </Transition>
                    </Container>
                  </div>
                </div>
              </div>

              <Container>
                <TabList
                  ref={tabListRef}
                  enabled={isLg && !scrolled}
                  selectedIndex={selectedIndex}
                />
                <Tab.Panels>
                  <Tab.Panel className="focus:outline-none">
                    <Icons icons={icons1} query={query} />
                  </Tab.Panel>
                </Tab.Panels>
                <footer className="flex flex-col items-center justify-between gap-10 border-t border-slate-400/20 pt-10 pb-20 sm:flex-row">
                  <p className="flex items-center gap-3 text-[0.8125rem] leading-6 text-slate-900">
                    <span>
                      By the makers of{' '}
                      <a
                        href="https://saunaworlds.com"
                        className="font-semibold"
                      >
                        Saunaworlds
                      </a>.
                      Icons designed by the amazing{' '}
                      <a
                        href="https://www.robertalanzetti.it/"
                        className="font-semibold"
                      >
                        Roberta Lanzetti
                      </a>.
                      Codebase is a fork of{' '}
                      <a
                        href="https://github.com/tailwindlabs/heroicons"
                        className="font-semibold"
                      >
                        tailwindlabs/heroicons
                      </a>
                    </span>
                  </p>
                  <ShareButton />
                </footer>
              </Container>
            </>
          )}
        </Tab.Group>
      </main>
    </>
  )
}
