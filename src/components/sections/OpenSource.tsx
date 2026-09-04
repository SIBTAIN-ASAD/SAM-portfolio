import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import { Header } from '../atoms/Header';
import { SectionWrapper } from '../../hoc';
import { config } from '../../constants/curriculumVtae/config';
import { fadeIn } from '../../utils/motion';
import { useMediaQuery } from 'react-responsive';

type Contribution = {
  repository: string;
  title: string;
  summary: string;
  stack: string[];
  status: string;
  statusClass: string;
  url: string;
};

const contributions: Contribution[] = [
  {
    repository: 'celery/celery',
    title: 'Prevent Signature.clone() kwargs aliasing',
    summary:
      'Deep-copied signature kwargs so cloned Celery tasks stay independent, with regression coverage for nested values; focused tests and compile checks pass while maintainer CI runs.',
    stack: ['Python', 'Celery', 'PyTest'],
    status: 'Open · review pending',
    statusClass: 'text-sky-300 border-sky-300/30 bg-sky-300/10',
    url: 'https://github.com/celery/celery/pull/10561',
  },
  {
    repository: 'amd/gaia',
    title: 'Make unsupported Telegram media feedback actionable',
    summary:
      'Added a deterministic reply for unsupported video, voice, audio, sticker, animation, and video-note uploads, with parameterized regression coverage for every type; merged upstream after CI passed.',
    stack: ['Python', 'PyTest', 'Telegram'],
    status: 'Merged · Sep 2, 2026',
    statusClass: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
    url: 'https://github.com/amd/gaia/pull/3263',
  },
  {
    repository: 'amd/gaia',
    title: 'Add regression coverage for Telegram media ingest',
    summary:
      'Added focused adapter tests for all Telegram media outcomes; the change was merged upstream after the full adapter suite passed.',
    stack: ['Python', 'PyTest', 'Telegram'],
    status: 'Merged · Aug 31, 2026',
    statusClass: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
    url: 'https://github.com/amd/gaia/pull/3150',
  },
  {
    repository: 'amd/gaia',
    title: 'Harden Telegram access and session isolation',
    summary:
      'Added allowlist checks, per-user session handling, streaming edit deduplication, and focused regression coverage for the Telegram adapter.',
    stack: ['Python', 'PyTest', 'Telegram'],
    status: 'Merged · Aug 28, 2026',
    statusClass: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
    url: 'https://github.com/amd/gaia/pull/3052',
  },
];

const OpenSource = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      <Header useMotion={!isMobile} {...config.sections.openSource} />

      <div className="mt-3 max-w-3xl">
        <p className="text-secondary text-[17px] leading-[30px]">
          {config.sections.openSource.content}
        </p>
      </div>

      <div className="mt-12">
        <div className="rounded-2xl border border-[#33488d] bg-[#070b18]/80 p-6 shadow-lg sm:p-8">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                Contribution highlights
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Selected pull requests</h3>
            </div>
            <a
              href="https://github.com/SIBTAIN-ASAD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-[#535C91] hover:bg-white/5"
            >
              <FaGithub /> View GitHub
            </a>
          </div>

          <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ['1', 'open PRs'],
              ['3', 'merged PRs'],
              ['17', 'focused tests passing'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-secondary">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {contributions.map((contribution, index) => (
              <motion.article
                key={contribution.url}
                variants={fadeIn('up', 'spring', index * 0.12, 0.5)}
                className="rounded-xl border border-white/10 bg-[#0d1326] p-5 transition hover:border-[#535C91]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#8b96d8]">{contribution.repository}</p>
                    <h4 className="mt-1 text-lg font-bold text-white">{contribution.title}</h4>
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${contribution.statusClass}`}
                  >
                    {contribution.status.startsWith('Merged') ? <FaCheckCircle /> : <FaCodeBranch />}
                    {contribution.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary">{contribution.summary}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {contribution.stack.map(item => (
                      <span key={item} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#aab2ef]"
                  >
                    View PR <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(OpenSource, 'open-source');
