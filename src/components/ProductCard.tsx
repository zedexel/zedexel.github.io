import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  isComingSoon?: boolean;
  isBeta?: boolean;
  children?: React.ReactNode;
  variant?: "minimal" | "full";
  onLearnMore?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  isComingSoon = false,
  isBeta = false,
  children,
  variant = "full",
  onLearnMore,
}) => {
  if (variant === "minimal") {
    return (
      <div className="relative group">
        {/* Border glow effect */}
        <div
          className={`absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
            title === "MailZed"
              ? "border-2 border-orange-400/60 shadow-[0_0_40px_8px_rgba(251,146,60,0.25),0_0_80px_16px_rgba(251,146,60,0.15)]"
              : "border-2 border-aqua-500/60 shadow-[0_0_40px_8px_rgba(20,184,166,0.25),0_0_80px_16px_rgba(20,184,166,0.15)]"
          }`}
        ></div>

        {/* Main product card */}
        <div
          className={`relative p-8 md:p-10 transition-all duration-300 hover:shadow-2xl h-full flex flex-col bg-dark-900/40 backdrop-blur-md rounded-2xl shadow-2xl ${
            title === "MailZed"
              ? "border border-orange-500/20"
              : "border border-aqua-500/20"
          }`}
          style={{
            boxShadow:
              title === "MailZed"
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(251, 146, 60, 0.1)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(6, 182, 212, 0.1)",
          }}
        >
          {/* Badge */}
          {(isBeta || isComingSoon) && (
            <div className="absolute -top-2 -right-2">
              {isBeta && (
                <span className="bg-aqua-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                  BETA
                </span>
              )}
              {isComingSoon && (
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                  BUILDING
                </span>
              )}
            </div>
          )}

          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="text-center md:text-left mb-6">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
                    title === "MailZed" ? "orange-glow" : "aqua-glow"
                  }`}
                >
                  {title === "ZedChat" && "🤖 "}
                  {title === "MailZed" && "📧 "}
                  {title}
                </h3>
                {isBeta && (
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-dark-200 font-medium">
                    Live!
                  </span>
                )}
                {isComingSoon && (
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-dark-200 font-medium">
                    Coming Soon
                  </span>
                )}
              </div>

              <p className="text-dark-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
                {description}
              </p>

              {/* Features */}
              {title === "ZedChat" && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  <span className="text-sm bg-aqua-500/20 text-aqua-300 px-3 py-1.5 rounded-full border border-aqua-500/30 font-medium">
                    ⚡ 24/7 Support
                  </span>
                  <span className="text-sm bg-aqua-500/20 text-aqua-300 px-3 py-1.5 rounded-full border border-aqua-500/30 font-medium">
                    📧 Lead Capture
                  </span>
                  <span className="text-sm bg-aqua-500/20 text-aqua-300 px-3 py-1.5 rounded-full border border-aqua-500/30 font-medium">
                    📊 AI Summary
                  </span>
                </div>
              )}

              {title === "MailZed" && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  <span className="text-sm bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full border border-orange-500/30 font-medium">
                    📈 Bulk Campaigns
                  </span>
                  <span className="text-sm bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full border border-orange-500/30 font-medium">
                    📊 Progress Tracking
                  </span>
                  <span className="text-sm bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full border border-orange-500/30 font-medium">
                    🤖 AI Replies
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-end">
              {isComingSoon ? (
                <div className="text-center md:text-left">
                  <p className="text-dark-300 text-base md:text-lg font-semibold">
                    Stay tuned for updates!
                  </p>
                </div>
              ) : (
                <div className="text-center md:text-left">
                  {title === "ZedChat" && (
                    <div className="mb-6">
                      <div className="text-lg md:text-xl font-bold text-dark-50 mb-1">
                        Starting at{" "}
                        <span className="aqua-glow">50 AED/month</span>
                      </div>
                      <div className="text-sm md:text-base text-dark-300">
                        500 conversations included
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    {title === "ZedChat" && (
                      <button
                        onClick={() => {
                          window.dispatchEvent(new Event("openZedChat"));
                        }}
                        className="aqua-button px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 whitespace-nowrap"
                      >
                        🚀 Try Demo
                      </button>
                    )}

                    {onLearnMore && (
                      <button
                        onClick={onLearnMore}
                        className="aqua-border bg-transparent text-aqua-400 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:bg-aqua-500/10 aqua-border-hover whitespace-nowrap"
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="elevated-card rounded-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in-up group relative overflow-hidden">
      <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-50 group-hover:aqua-glow transition-all duration-300">
            {title}
          </h3>
          {isBeta && (
            <span className="bg-aqua-500/20 text-aqua-400 px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider border border-aqua-500/30">
              Beta
            </span>
          )}
          {isComingSoon && (
            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider border border-orange-500/30">
              Building
            </span>
          )}
        </div>
        <p className="text-dark-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
          {description}
        </p>
        {isComingSoon ? (
          <div className="subtle-border bg-white/5 rounded-xl p-6 md:p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-dark-100">
              Launching Soon
            </p>
            <p className="text-dark-400 mt-2 text-sm md:text-base">
              Stay tuned for updates!
            </p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default ProductCard;
