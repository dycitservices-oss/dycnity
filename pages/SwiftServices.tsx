import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import { Shield, Cloud, Settings, Users, Check } from 'lucide-react';

const SwiftServices: React.FC = () => {
  return (
    <>
      <SEO
        title="End-to-End SWIFT Services - DYCNITY"
        description="End-to-End SWIFT Services for modern financial operations: consulting, implementation, operations, security, cloud modernization, integration, and training."
        canonical="https://DYCNITY.com/swift-services"
      />

      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="bg-indigo-900 dark:bg-slate-900 py-20 text-center relative overflow-hidden rounded-b-[3rem] mb-16 mx-0 md:mx-4 text-white border-b border-indigo-800 dark:border-slate-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">End-to-End SWIFT Services</h1>
            <p className="text-indigo-200 text-lg">Core Service Offerings for modern financial operations.</p>
            <p className="mt-4 text-indigo-200 max-w-3xl mx-auto">We help financial institutions and corporates design, deploy, operate, and secure their SWIFT environments with enterprise-grade reliability and domain expertise.</p>
            <div className="mt-6 flex justify-center gap-4 text-sm text-indigo-100">
              <span className="px-3 py-1 bg-indigo-800/30 rounded-full">Consulting · Implementation · Operations</span>
              <span className="px-3 py-1 bg-indigo-800/30 rounded-full">Security & CSP Compliance</span>
              <span className="px-3 py-1 bg-indigo-800/30 rounded-full">Cloud & API-First Modernization</span>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-24">
          <SectionHeader title="Service Catalog" subtitle="A complete portfolio of SWIFT-focused services" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Shield size={20} />Operations & Run Support</h3>
              <p className="text-slate-600 dark:text-slate-300">Comprehensive support for all SWIFT-related operations, ensuring seamless and secure financial messaging across your organization.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>24x7 operational assistance</li>
                <li>Production-grade operations and monitoring</li>
                <li>Professional SWIFT services and runbooks</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Settings size={20} />Implementation & Rollout</h3>
              <p className="text-slate-600 dark:text-slate-300">End-to-end deployment and configuration of SWIFT solutions tailored to your infrastructure, workflows, and regulatory landscape.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Greenfield & migration projects</li>
                <li>Design to go-live delivery</li>
                <li>Testing, certification & cutover support</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Check size={20} />Health Check & Optimization</h3>
              <p className="text-slate-600 dark:text-slate-300">In-depth evaluation of your existing SWIFT environment to identify gaps, mitigate risks, and improve availability, performance, and resilience.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Risk & performance review</li>
                <li>Actionable optimization roadmap</li>
                <li>Availability and resilience recommendations</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Shield size={20} />Security & Compliance (CSP)</h3>
              <p className="text-slate-600 dark:text-slate-300">Advisory and implementation support to achieve and maintain SWIFT Customer Security Programme (CSP) compliance, harden controls, and strengthen cyber posture.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Policy, controls & evidence preparation</li>
                <li>CSP-aligned remediation and advisory</li>
                <li>Continuous compliance monitoring</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Cloud size={20} />Cloud Modernization</h3>
              <p className="text-slate-600 dark:text-slate-300">Expert-led migration from on-premise SWIFT infrastructure to Alliance Cloud, designed for minimal downtime and maximum operational continuity.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Plan · Migrate · Stabilize</li>
                <li>Low-risk cutover and stabilization</li>
                <li>Operational runbooks for cloud-based SWIFT</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Users size={20} />Integration & Automation</h3>
              <p className="text-slate-600 dark:text-slate-300">Secure and scalable integration of SWIFT services with your core banking, ERP, treasury, and downstream systems using modern API architectures.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>REST / ISO 20022 ready integrations</li>
                <li>API-first architectures and gateways</li>
                <li>Payment reconciliation & formats conversion</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-slate-100 dark:border-slate-700">
              <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Users size={20} />Enablement & Upskilling</h3>
              <p className="text-slate-600 dark:text-slate-300">Customized training programs to upskill your technical and operations teams on SWIFT standards, workflows, security, and best practices.</p>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Role-based training paths</li>
                <li>Onsite and virtual delivery</li>
                <li>Operational playbooks & exercises</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiftServices;
