"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLaptopCode, faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { projectsData } from "@/data/projects";
import "./DesktopView.css";

const DesktopView = () => {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleAppClick = (path) => {
    if (path === "/contact") {
      setShowContactForm(true);
    } else if (path.startsWith("http")) {
      // External URL - open in new tab
      window.open(path, "_blank");
    } else {
      // Internal navigation
      router.push(path);
    }
  };

  const desktopApps = [
    { name: "About", icon: faUser, path: "/about" },
    { name: "Projects", icon: faLaptopCode, path: "/projects" },
    { name: "Resume", icon: faFileAlt, path: "/resume" },
    { name: "Contact", icon: faEnvelope, path: "/contact" },
  ];

  //   const mobileApps = projectsData
  //     .filter((project) => !project.archived)
  //     .slice(0, 6)
  //     .map((project) => {
  //       let icon;
  //       let image = project.image || "";
  //       if (project.icon === "fas fa-briefcase icon") {
  //         icon = faBriefcase;
  //       } else if (project.icon === "fa fa-paw icon") {
  //         icon = faPaw;
  //       } else if (project.id === 1 || project.id === 0) {
  //         image = project.image ?? "";
  //       } else {
  //         icon = faLaptopCode;
  //       }

  //       return {
  //         name: project.name,
  //         icon: icon,
  //         image,
  //         path: project.link.startsWith("http")
  //           ? project.link
  //           : `/project/${project.id}`,
  //       };
  //     });

    if (isMobile) {
      return (
        <div className="iphone-container">
          <div className="iphone-screen">
            <div className="status-bar">
              {/* <Image
                className="carrier"
                alt="portfolio-logo"
                src={`${ASSET_PATHS.LOGOS}/PORTFOLIO_LOGO.png`}
                width={20}
                height={20}
              /> */}
              <span className="time">{formatTime(currentTime)}</span>
            </div>

            <div className="wallpaper">
              <div className="mobile-welcome-window">
                <div className="mobile-window-title-bar">
                  <div className="mobile-window-controls">
                    <div className="mobile-close-btn"></div>
                  </div>
                  <span className="mobile-window-title">Welcome</span>
                </div>
                <div className="mobile-window-content">
                  <p>Explore my work & get in touch.</p>
                </div>
              </div>

              <div className="home-apps">
                {/* {mobileApps.map((app) => (
                  <button
                    key={app.name}
                    className="app-icon"
                    type="button"
                    onClick={() => handleAppClick(app.path)}
                    tabIndex={0}
                    aria-label={app.name}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleAppClick(app.path);
                      }
                    }}
                  >
                    <span className="icon">
                      {app.icon && typeof app.icon !== "number" && (
                        <FontAwesomeIcon icon={app.icon} />
                      )}
                      {app.image && (
                        <Image
                          className="app-image"
                          src={app.image}
                          alt={app.name}
                          width={32}
                          height={32}
                        />
                      )}
                    </span>
                    <span className="app-name">{app.name}</span>
                  </button>
                ))} */}
              </div>
            </div>

            <div className="page-indicators">
              <div className="page-dot active"></div>
              <div className="page-dot"></div>
            </div>

            <div className="dock-mobile">
              <button
                className="dock-app"
                type="button"
                onClick={() => handleAppClick("/about")}
                tabIndex={0}
                aria-label="About Me"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleAppClick("/about");
                  }
                }}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
              <button
                className="dock-app"
                type="button"
                onClick={() => handleAppClick("/projects")}
                tabIndex={0}
                aria-label="Projects"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleAppClick("/projects");
                  }
                }}
              >
                <FontAwesomeIcon icon={faLaptopCode} />
              </button>
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="macintosh-container">
      <div
        className="mac-screen"
      >
        <div className="menu-bar">
          <div className="menu-left">
            {/* <Image
              className="my-logo"
              alt="portfolio-logo"
              width={24}
              height={24}
            /> */}
            <span className="menu-item" style={{ cursor: "pointer" }}>
              File
            </span>
            <span className="menu-item" style={{ cursor: "pointer" }}>
              Edit
            </span>
            <span className="menu-item" style={{ cursor: "pointer" }}>
              View
            </span>
          </div>
          <div className="menu-right time-date-container">
            <span className="time">{formatTime(currentTime)}</span>
            <span className="date">{formatDate(currentTime)}</span>
          </div>
        </div>

        <div className="desktop">
          <div className="desktop-items">
            {desktopApps.map((app) => (
              <button
                key={app.name}
                className="desktop-icon"
                type="button"
                onClick={() => handleAppClick(app.path)}
                tabIndex={0}
                aria-label={app.name}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleAppClick(app.path);
                  }
                }}
              >
                <div className="icon-image">
                  <FontAwesomeIcon icon={app.icon} />
                </div>
                <span className="icon-label">{app.name}</span>
              </button>
            ))}
          </div>

          <div className="welcome-window">
            <div className="window-title-bar">
              <div className="window-controls">
                <div className="close-btn"></div>
              </div>
              <span className="window-title">Welcome to My Portfolio</span>
            </div>
            <div className="window-content">
              <h2>Hello, I&#39;m Jonathan Atkins</h2>
              <p>
                Click on the icons to explore my work, learn about me, and how
                best to reach out.
              </p>
              <div className="quick-links">
                <button onClick={() => handleAppClick("/about")}>
                  About Me
                </button>
                <button onClick={() => handleAppClick("/projects")}>
                  View Projects
                </button>
                <button onClick={() => handleAppClick("/contact")}>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="taskbar">
          <div className="start-menu">Machina Ex Jonathan</div>
          <div className="running-apps">
            <div className="app-tab active">Finder</div>
            <div className="app-tab">Portfolio</div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default DesktopView;
