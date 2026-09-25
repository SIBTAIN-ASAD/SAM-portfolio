import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
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
    repository: 'typeddjango/django-stubs',
    title: 'Add a mutable HttpRequest typing helper',
    summary:
      'Adds a public MutableHttpRequest helper for test request factories, keeping Django\'s runtime HttpRequest while exposing mutable QueryDict attributes to type checkers after mypy 2.2 changed __new__ handling; merged upstream after review fixes and full checks passed.',
    stack: ['Python', 'Django', 'Mypy'],
    status: 'Merged · Sep 9, 2026',
    statusClass: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
    url: 'https://github.com/typeddjango/django-stubs/pull/3642',
  },
  {
    repository: 'apache/airflow',
    title: 'Defer templated DateTimeSensorAsync targets until rendering',
    summary:
      'Prevents a Jinja expression from being parsed as a datetime during Dag parsing. Concrete targets still start from the triggerer, while templated targets use the worker path after rendering, with focused regression coverage.',
    stack: ['Python', 'Airflow', 'PyTest'],
    status: 'Merged · Sep 20, 2026',
    statusClass: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
    url: 'https://github.com/apache/airflow/pull/72659',
  },
  {
    repository: 'pytest-dev/pytest',
    title: 'Keep bracketed custom item names in --last-failed',
    summary:
      'Preserves canonical string node IDs so custom collectors whose item names contain brackets are not silently skipped by --last-failed. Added focused regression coverage and a changelog entry; local tests, Ruff, the upstream matrix, and Codecov are green while review is pending.',
    stack: ['Python', 'PyTest', 'Testing'],
    status: 'Open · review pending',
    statusClass: 'text-sky-300 border-sky-300/30 bg-sky-300/10',
    url: 'https://github.com/pytest-dev/pytest/pull/15065',
  },
  {
    repository: 'matplotlib/matplotlib',
    title: 'Document WSL GUI backend setup',
    summary:
      'Adds a focused backend-guide section explaining how WSLg supplies the display environment, how to inspect the selected backend, and when to use the non-interactive Agg backend in headless WSL environments. Open for upstream review.',
    stack: ['Python', 'Matplotlib', 'Sphinx'],
    status: 'Open · review pending',
    statusClass: 'text-sky-300 border-sky-300/30 bg-sky-300/10',
    url: 'https://github.com/matplotlib/matplotlib/pull/32386',
  },
  {
    repository: 'scipy/scipy',
    title: 'Support split Fortran sequential subrecords',
    summary:
      'Adds support for the signed continuation markers emitted by gfortran and Intel for large sequential records, validates each subrecord, and covers the format with a synthetic regression fixture. Open for upstream review.',
    stack: ['Python', 'SciPy', 'NumPy'],
    status: 'Open · checks pending',
    statusClass: 'text-amber-300 border-amber-300/30 bg-amber-300/10',
    url: 'https://github.com/scipy/scipy/pull/26270',
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

const projectGroups = contributions.reduce<Array<{ repository: string; items: Contribution[] }>>(
  (groups, contribution) => {
    const existing = groups.find(group => group.repository === contribution.repository);
    if (existing) existing.items.push(contribution);
    else groups.push({ repository: contribution.repository, items: [contribution] });
    return groups;
  },
  [],
);

const OpenSource = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [openRepository, setOpenRepository] = useState<string | null>(null);

  return (
    <>
      <Header useMotion={!isMobile} {...config.sections.openSource} />

      <div className="mt-3 max-w-3xl">
        <p className="text-secondary text-[17px] leading-[30px]">
          {config.sections.openSource.content}
        </p>
      </div>

      <div className="mt-10">
        <div className="rounded-2xl border border-[#33488d]/70 bg-[#070b18]/80 p-4 shadow-lg sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-secondary">
                Contribution highlights
              </p>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">Selected pull requests</h3>
            </div>
            <a
              href="https://github.com/SIBTAIN-ASAD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-[#535C91] hover:bg-white/5 sm:text-sm"
            >
              <FaGithub /> View GitHub
            </a>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2">
            {[
              ['3', 'open PRs'],
              ['5', 'merged PRs'],
              ['36', 'focused checks passing'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
                <p className="text-xl font-black text-white sm:text-2xl">{value}</p>
                <p className="mt-0.5 text-[9px] uppercase leading-4 tracking-[0.12em] text-secondary sm:text-[10px]">{label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <p className="mb-3 text-xs text-secondary">Select a project to explore the individual contributions.</p>
            {projectGroups.map((group, index) => {
              const mergedCount = group.items.filter(item => item.status.startsWith('Merged')).length;
              const isOpen = openRepository === group.repository;
              const stacks = Array.from(new Set(group.items.flatMap(item => item.stack))).slice(0, 4);

              return (
                <motion.div
                  key={group.repository}
                  variants={fadeIn('up', 'spring', index * 0.06, 0.35)}
                  className={`overflow-hidden rounded-xl border transition ${isOpen ? 'border-[#535C91] bg-[#0d1326]' : 'border-white/10 bg-[#0b1020] hover:border-[#535C91]/70'}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenRepository(isOpen ? null : group.repository)}
                    className="flex w-full items-center gap-3 p-3 text-left sm:p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#535C91]/15 text-[#aab2ef]">
                      <FaGithub />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white sm:text-base">{group.repository}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-secondary sm:text-xs">
                        <span>{group.items.length} {group.items.length === 1 ? 'contribution' : 'contributions'}</span>
                        <span className="text-emerald-300/80">{mergedCount} merged</span>
                        {mergedCount < group.items.length && <span className="text-sky-300/80">{group.items.length - mergedCount} in review</span>}
                      </span>
                    </span>
                    <span className="hidden items-center gap-1.5 sm:flex">
                      {stacks.map(stack => <span key={stack} className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-300">{stack}</span>)}
                    </span>
                    <FaChevronDown className={`shrink-0 text-xs text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-3 pb-3 sm:px-4 sm:pb-4">
                      <div className="grid gap-2 pt-3">
                        {group.items.map(contribution => (
                          <article key={contribution.url} className="rounded-lg border border-white/10 bg-[#111a34]/70 p-3">
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="text-sm font-semibold leading-5 text-white">{contribution.title}</h4>
                              <span className={`shrink-0 whitespace-nowrap rounded-full border px-2 py-1 text-[10px] font-semibold ${contribution.statusClass}`}>
                                {contribution.status.startsWith('Merged') ? <FaCheckCircle className="mr-1 inline" /> : <FaCodeBranch className="mr-1 inline" />}
                                {contribution.status.replace(' · review pending', '').replace(' · checks pending', '')}
                              </span>
                            </div>
                            <p className="mt-2 text-xs leading-5 text-secondary sm:text-sm">{contribution.summary}</p>
                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap gap-1.5">
                                {contribution.stack.map(item => <span key={item} className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-300 sm:text-xs">{item}</span>)}
                              </div>
                              <a href={contribution.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition hover:text-[#aab2ef] sm:text-sm">
                                View PR <FaExternalLinkAlt className="text-xs" />
                              </a>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(OpenSource, 'open-source');
