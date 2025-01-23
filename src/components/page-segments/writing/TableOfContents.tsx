import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingData {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = ({ className }: { className?: string }) => {
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [activeHeadings, setActiveHeadings] = useState<Set<string>>(new Set());
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    // Get all headings
    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingData: HeadingData[] = Array.from(elements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName[1]),
    }));
    setHeadings(headingData);

    // Create section observers
    elements.forEach((heading, index) => {
      // Calculate section bounds
      const nextHeading = elements[index + 1];

      // Create a wrapper div for the section
      const sectionWrapper = document.createElement('div');
      sectionWrapper.setAttribute('data-heading-id', heading.id);

      // Insert wrapper right after the heading
      heading.parentNode?.insertBefore(sectionWrapper, heading.nextSibling);

      // Move all nodes between this heading and the next into the wrapper
      let currentNode = sectionWrapper.nextSibling;
      while (currentNode && currentNode !== nextHeading) {
        const nextNode = currentNode.nextSibling;
        sectionWrapper.appendChild(currentNode);
        currentNode = nextNode;
      }

      // Observe the section wrapper
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const headingId = entry.target.getAttribute('data-heading-id');
            if (!headingId) return;

            setActiveHeadings((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(headingId);
              } else {
                newSet.delete(headingId);
              }
              return newSet;
            });
          });
        },
        {
          rootMargin: "0px",
          threshold: 0.1 // Consider section visible when 10% is in view
        }
      );

      observer.observe(sectionWrapper);
    });

    // Scroll handler for top button
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up observers and event listeners
      const sections = document.querySelectorAll('[data-heading-id]');
      sections.forEach(section => section.parentNode?.removeChild(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={twMerge("hidden lg:block w-64 shrink-0 h-fit sticky top-24", className)}>
      <div className="relative">
        {/* Left border line */}
        <div className="absolute left-0 top-0 w-[1px] h-full bg-neutral-600" />

        <ul className="relative">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={twMerge(
                "relative group",
                "after:absolute after:left-0 after:top-0 after:w-[1px] after:h-full after:bg-amber-400 after:opacity-0 after:transition-opacity after:duration-150",
                "hover:after:opacity-100",
                activeHeadings.has(heading.id) && "after:opacity-100"
              )}
              style={{
                paddingLeft: `${(heading.level - 1) * 12}px`,
              }}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={twMerge(
                  "text-left hover:text-amber-400 transition-colors duration-150 w-full py-1 pl-1.5",
                  activeHeadings.has(heading.id)
                    ? "text-amber-400 font-medium"
                    : "text-neutral-200"
                )}
              >
                <span className="text-sm">{heading.text}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={scrollToTop}
          className={twMerge(
            "absolute left-[-.7rem] bottom-[-2.6rem] w-6 h-6 rounded-full bg-neutral-800",
            "flex items-center justify-center",
            "text-neutral-400 hover:text-amber-400 hover:bg-neutral-700",
            "opacity-0 pointer-events-none",
            "transition-[opacity]",
            showTopButton
              ? "opacity-100 pointer-events-auto duration-300"
              : "opacity-0 pointer-events-none duration-200"
          )}
        >
          <span className="text-sm">↑</span>
        </button>
      </div>
    </nav>
  );
};

export default TableOfContents;
