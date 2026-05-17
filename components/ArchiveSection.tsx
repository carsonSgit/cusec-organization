"use client";

import { useState } from "react";
import Image from "next/image";
import { archiveData } from "@/lib/archiveData";

export function ArchiveSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedYears = showAll ? archiveData : archiveData.slice(0, 6);

  return (
    <section className="cusec-section cusec-archive-section" id="archive">
      <div className="cusec-section__inner">
        <div className="cusec-archive-header">
          <h2>
            Past <em>Conferences</em>
          </h2>
          <p>Explore over two decades of CUSEC history, speakers, and events.</p>
        </div>

        <div className="cusec-archive-list">
          {displayedYears.map((item) => (
            <article key={item.year} className="cusec-archive-item">
              <div className="cusec-archive-item__header">
                <div className="cusec-archive-item__brand">
                  <div className="cusec-archive-item__logo">
                    <Image src={item.logo} alt={`CUSEC ${item.year} Logo`} />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                {!item.url && <span className="cusec-archive-item__badge">Archived</span>}
              </div>
              
              <div className="cusec-archive-item__content">
                <p>{item.url ? item.info : item.detailedInfo}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cusec-archive-link"
                  >
                    Visit Site <span aria-hidden="true" className="cusec-button-link__arrow">-&gt;</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {archiveData.length > 6 && (
          <div className="cusec-archive-actions">
            {!showAll ? (
              <button 
                onClick={() => setShowAll(true)} 
                className="cusec-archive-more-btn"
              >
                See Full Archive
              </button>
            ) : (
              <button 
                onClick={() => setShowAll(false)} 
                className="cusec-archive-more-btn"
              >
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
