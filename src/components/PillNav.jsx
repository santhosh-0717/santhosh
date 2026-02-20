import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    activeHref,
    className = '',
    ease = 'power3.easeOut',
    baseColor = '#fff',
    pillColor = '#22719fff',
    hoveredPillTextColor = '#060010',
    pillTextColor,
    logoColor = '#08fdd8',
    hoverPillColor,
    mobileBgColor,
    activePillColor = 'rgba(255, 255, 255, 0.1)',
    activeTextColor = '#a855f7',
    onMobileMenuClick,
    initialLoadAnimation = true
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const circleRefs = useRef([]);
    const tlRefs = useRef([]);
    const activeTweenRefs = useRef([]);
    const logoImgRef = useRef(null);
    const logoTweenRef = useRef(null);
    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const navItemsRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach(circle => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector('.pill-label');
                const white = pill.querySelector('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (document.fonts?.ready) {
            document.fonts.ready.then(layout).catch(() => { });
        }

        const menu = mobileMenuRef.current;
        if (menu) {
            gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
        }

        if (initialLoadAnimation) {
            const logo = logoRef.current;
            const navItems = navItemsRef.current;

            if (logo) {
                gsap.set(logo, { scale: 0 });
                gsap.to(logo, {
                    scale: 1,
                    duration: 0.6,
                    ease
                });
            }

            if (navItems) {
                gsap.set(navItems, { width: 0, overflow: 'hidden' });
                gsap.to(navItems, {
                    width: 'auto',
                    duration: 0.6,
                    ease
                });
            }
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease, initialLoadAnimation]);

    const handleEnter = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLeave = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLogoEnter = () => {
        const img = logoImgRef.current;
        if (!img) return;
        logoTweenRef.current?.kill();
        gsap.set(img, { rotate: 0 });
        logoTweenRef.current = gsap.to(img, {
            rotate: 360,
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
        }

        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible' });
                gsap.fromTo(
                    menu,
                    { opacity: 0, y: 10, scaleY: 1 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.3,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                });
            }
        }

        onMobileMenuClick?.();
    };

    const isExternalLink = href =>
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('//') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#');

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor,
        ['--logo-color']: logoColor,
        ['--hover-bg']: hoverPillColor || baseColor,
        ['--mobile-bg']: mobileBgColor || (baseColor === 'transparent' ? (pillTextColor === '#ffffff' || pillTextColor === '#909096' ? '#1d1d1d' : '#ffffff') : baseColor),
        ['--active-pill-bg']: activePillColor,
        ['--active-text']: activeTextColor
    };

    // We are using react-scroll Link instead of react-router-dom Link for smooth scrolling
    // so we treat internal links as scroll targets if they don't start with /
    const renderLink = (item, i, isMobile = false) => {
        const isScrollLink = !item.href.startsWith('/') && !isExternalLink(item.href);
        const baseClassName = isMobile ? 'mobile-menu-link' : 'pill';

        const commonProps = {
            className: baseClassName,
            onClick: isMobile ? () => setIsMobileMenuOpen(false) : undefined,
            'aria-label': item.ariaLabel || item.label,
            // Only add mouse handlers for desktop pills
            ...(isMobile ? {} : {
                onMouseEnter: () => handleEnter(i),
                onMouseLeave: () => handleLeave(i),
                role: "menuitem"
            })
        };

        const content = isMobile ? item.label : (
            <>
                <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={el => {
                        circleRefs.current[i] = el;
                    }}
                />
                <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                    </span>
                </span>
            </>
        );

        if (isScrollLink) {
            return (
                <Link
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="is-active"
                    {...commonProps}
                >
                    {content}
                </Link>
            )
        }

        return (
            <a href={item.href} {...commonProps}>
                {content}
            </a>
        )
    }

    const isImageUrl = (url) => {
        return url && (url.startsWith('http') || url.startsWith('/') || url.startsWith('./'));
    };

    return (
        <div className="pill-nav-container">
            <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
                {/* Determine if the logo link should be a react-scroll Link or a standard anchor tag */}
                {logo && (items?.[0]?.href && !items[0].href.startsWith('/') && !isExternalLink(items[0].href) ? (
                    <Link
                        className="pill-logo"
                        to={items[0].href}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        aria-label="Home"
                        onMouseEnter={handleLogoEnter}
                        role="menuitem"
                        ref={el => {
                            logoRef.current = el;
                        }}
                    >
                        {isImageUrl(logo) ? (
                            <img src={logo} alt={logoAlt} ref={logoImgRef} />
                        ) : (
                            <span ref={logoImgRef} style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--logo-color)' }}>{logo}</span>
                        )}
                    </Link>
                ) : (
                    <a
                        className="pill-logo"
                        href={items?.[0]?.href || '#'}
                        aria-label="Home"
                        onMouseEnter={handleLogoEnter}
                        ref={el => {
                            logoRef.current = el;
                        }}
                    >
                        {isImageUrl(logo) ? (
                            <img src={logo} alt={logoAlt} ref={logoImgRef} />
                        ) : (
                            <span ref={logoImgRef} style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--logo-color)' }}>{logo}</span>
                        )}
                    </a>
                ))}

                <div className="pill-nav-items desktop-only" ref={navItemsRef}>
                    <ul className="pill-list" role="menubar">
                        {items.map((item, i) => (
                            <li key={item.href || `item-${i}`} role="none">
                                {renderLink(item, i, false)}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="mobile-menu-button mobile-only"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    ref={hamburgerRef}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </nav>

            <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
                <ul className="mobile-menu-list">
                    {items.map((item, i) => (
                        <li key={item.href || `mobile-item-${i}`}>
                            {renderLink(item, i, true)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
