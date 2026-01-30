import React from 'react';
import styles from "./careers.module.css";
import Link from "next/link";
import Image from "next/image";
import {
    IoLocationOutline,
    IoStatsChartOutline,
    IoTimeOutline,
    IoSearchOutline,
    IoChevronDownOutline,
    IoCashOutline
} from "react-icons/io5";
import { jobs } from "../../data/jobs";

export const metadata = {
    title: "Careers - AYRO",
    description: "Join the AYRO team.",
    robots: {
        index: false,
        follow: false,
    },
};

const CareerPage = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Drive With AYRO
                    </h1>
                    <h2 className={styles.heroSubtitle}>
                        Earn $30+/Hour
                    </h2>
                </div>
            </section>

            {/* Two Color Divider */}
            <div className={styles.sectionDivider}>
                <div className={styles.dividerContainer}>
                    <div className={styles.dividerTeal}></div>
                    <div className={styles.dividerBlue}></div>
                </div>
            </div>

            <div className={styles.openingSection}>
                {/* Header Content */}
                <div className={styles.headerContent}>
                    <h2 className={styles.openingTitle}>
                        <span style={{ color: "#000000" }}>Current</span> Openings
                    </h2>
                    <h3 className={styles.openingDescription}>
                        At AYRO Rides, we’re redefining urban mobility with sustainable solutions. Our team seeks talented professionals who share our vision. Join us for growth opportunities.
                    </h3>
                </div>

                {/* Search & Controls */}
                <div className={styles.controlsContainer}>
                    <div className={styles.searchBar}>
                        <IoSearchOutline className={styles.searchIcon} />
                        <input type="text" placeholder="Search job..." className={styles.searchInput} />
                    </div>
                    <div className={styles.filterGroup}>
                        <button className={styles.sortByBtn}>
                            Sort By <IoChevronDownOutline />
                        </button>
                    </div>
                </div>

                {/* Job Cards */}
                <div className={styles.jobGrid}>
                    {jobs.map((job) => (
                        <div key={job.id} className={styles.jobCard}>
                            <h3 className={styles.jobTitle}>{job.title}</h3>
                            <p className={styles.jobDesc}>{job.description}</p>
                            <div className={styles.jobMeta}>
                                <div className={styles.metaItem}>
                                    <IoLocationOutline className={styles.metaIcon} />
                                    <span>{job.location}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <IoStatsChartOutline className={styles.metaIcon} />
                                    <span>{job.experience}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <IoTimeOutline className={styles.metaIcon} />
                                    <span>{job.type}</span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className={styles.jobFooter}>
                                <div className={styles.jobSalary}>
                                    <IoCashOutline className={styles.salaryIcon} />
                                    <span>{job.salary}</span>
                                </div>
                                <button className={styles.applyBtn}>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </main>
    );
};

export default CareerPage;
