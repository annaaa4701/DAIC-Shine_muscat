import React from "react";

const MainSection: React.FC = () => {
  // 이미지는 public 폴더에 넣고 경로를 지정하거나, 직접 URL을 사용할 수 있습니다.
  // 예: const imageUrl = "/path/to/your/image.jpg";
  const imageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDciLlEYqnD3Lq7jV8QHvuixKt1n5MWMWZwK6BDqOPLJJo6U1w71fz9x-87-bvvt5g2d1UIJv9JFFX7uylqJmhFunfP8X4DqJe-DLOLkb4_vQkR-yWCXde6a6GU7RKXnLlX3affd9EdB3vMlVgugG4bUncGdSqK2XjyqdHIDAek3_dKrB6C6NZYecL9Hby8rVFtFhozZ4-h2NH6hSO0oNJyAY-0t8Z1_3Biyyludbw1L44k3Mq4Q8zbtWYsO4InblcFHxO0j7uijvOv";

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
              style={{ backgroundImage: `url("${imageUrl}")` }}
            ></div>
            <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  AI 기반 자동 과제 양식 검사 서비스
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  학생은 감점 없이, 교수는 효율적으로
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#29a0c1] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;