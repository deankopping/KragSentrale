import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/header.module.css";
import { Divide as Hamburger } from "hamburger-react";
import { Logo } from "./Logo";
import PopUpMenu from "./PopupMenu";
import { useMediaQuery } from "react-responsive";

type Action = "scroll" | "link";

export interface MenuItem {
  label: string;
  id: string;
  action: Action;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.innerWidth <= 768);
  const [isOpen, setOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    if (window.innerWidth > 768) {
      window.addEventListener("scroll", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const menuItems: MenuItem[] = [
    { label: "ENTRANCE", id: "prices", action: "scroll" },
    { label: "LOCATION", id: "location", action: "scroll" },
    // { label: "EVENTS", id: "events", action: "scroll" },
    { label: "FAQs", id: "faq", action: "scroll" },
    { label: "ABOUT", id: "about", action: "scroll" },
    { label: "GALLERY", action: "link", id: "gallery" },
  ];

  return (
    <>
      <AnimatePresence>
        {!isScrolled && !isMobile && location.pathname === "/KragSentrale/" && (
          <motion.div>
            <header className={styles.container}>
              <div className={styles.items}>
                <motion.div
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 1.2 },
                    repeatCount: 2,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                >
                  <a
                    className={styles.instagram}
                    href="https://www.instagram.com/kragsentrale/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={styles.instagram}
                      fill="rgb(248, 242, 233)"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  className={styles.menuItems}
                  exit={{ opacity: 0, scale: 0 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
                  style={{ paddingRight: "0.5em" }}
                >
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() =>
                        item.action === "scroll"
                          ? scrollToSection(item.id)
                          : (window.location.href = `/${item.id}`)
                      }
                      className={`${styles.cursorPointer} ${styles.hoverOpacity}`}
                    >
                      {item.label}
                    </li>
                  ))}
                </motion.div>
              </div>
            </header>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(isMobile || isScrolled || location.pathname != "/KragSentrale/") && (
          <header className={`${styles.container} ${styles.gradientBlur}`}>
            <motion.div
              className={styles.items}
              exit={{ opacity: 0, scale: 0 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
            >
              <div>
                <motion.div className={styles.svgFists}>
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 1.2 },
                    }}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    <Logo introAnimate={false} width="60" height="60" />
                  </motion.div>

                  <motion.div
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 1.2 },
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  >
                    <Logo introAnimate={false} width="60" height="60" />
                  </motion.div>
                  <motion.div
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 1.2 },
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Logo introAnimate={false} width="60" height="60" />
                  </motion.div>
                </motion.div>
              </div>

              <div className={styles.popupMenuContainer}>
                <motion.div
                  className={styles.hamburgerMenuIcon}
                  animate={{ y: isOpen && isMobile ? "-2em" : "0em" }}
                  transition={{ duration: 1 }}
                >
                  <Hamburger
                    color={"white"}
                    size={25}
                    toggled={isOpen}
                    toggle={setOpen}
                    duration={0.5}
                  />
                </motion.div>
                <PopUpMenu
                  isOpen={isOpen}
                  setIsOpen={setOpen}
                  menuItems={[
                    { label: "HOME", id: "", action: "link" },
                    ...menuItems,
                  ]}
                />
              </div>
            </motion.div>
          </header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
