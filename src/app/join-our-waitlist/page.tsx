"use client";

import Script from "next/script";
import styles from "./waitlist.module.css";

export default function JoinOurWaitlist() {
    return (
        <main>
            {/* Header Section */}
            <section className={styles.headerSection}>
                <h1 className={styles.headerTitle}>
                    Join Our <span className={styles.blueText}>Waitlist</span>
                </h1>
            </section>

            {/* Section Divider */}
            <div className={styles.sectionDivider}>
                <div className={styles.dividerContainer}>
                    <div className={styles.dividerTeal}></div>
                    <div className={styles.dividerBlue}></div>
                </div>
            </div>

            {/* ReferralHero Embed Section */}
            <section className={styles.formSection}>
                <div className={styles.formContainer}>
                    <div id='referralhero-dashboard-MF2f0c6063df'></div>
                </div>
            </section>

            {/* ReferralHero Script */}
            <Script
                id="referralhero-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(m,a,i,t,r,e){if(m.RH)return;r=m.RH={},r.uuid
            =t,r.loaded=0,r.base_url=i,r.queue=[],m.rht=function()
            {r.queue.push(arguments)};e=a.getElementsByTagName('script')
            [0],c=a.createElement('script');c.async=!0,c.src=
            'https://d7zve4d3u0dfm.cloudfront.net/'+'production'+
            '/'+t+'.js',e.parentNode.insertBefore(c,e)}(window,document,
            'https://app.referralhero.com','MF2f0c6063df');
          `,
                }}
            />
        </main>
    );
}
