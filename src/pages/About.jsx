import { useCallback, useState } from "react";
import { RiHomeHeartFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { REPO_NAME } from "../../utils";

export default function About() {
  const navigate = useNavigate();
  const [scene, setScene] = useState(0);

  const renderScene = useCallback(() => {
    switch (scene) {
      case 0:
        return (
          <div className={`flex flex-col text-center`}>
            <span className="text-[24px]">
              {`Of course you said yes.
			  You’re stuck with me.`}
            </span>
          </div>
        );

      case 1:
        return (
          <div
            className={`flex flex-col items-center justify-center gap-6 text-center`}
          >
            <span className="text-[24px]">
              This one is straight from my heart to yours.
            </span>
            <div className="w-[min(90vw,620px)] overflow-hidden rounded-xl">
              <img
                src={`${REPO_NAME}card.png`}
                className="h-full w-full object-cover drop-shadow-2xl"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex w-[min(90vw,320px)] flex-col items-center gap-6 text-center">
            <span className="whitespace-pre-line text-[24px]">
              {`Every time this song plays,
			  I can’t help but think of you.`}
            </span>
            <iframe
              src="https://open.spotify.com/embed/track/0TAmnCzOtqRfvA38DDLTjj?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          </div>
        );

      case 3:
        return (
          <div className="flex w-[min(90vw,620px)] flex-col gap-4 text-center">
            <span className="text-[24px]">Moments I Keep Close</span>
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="animate-wiggle">
                <img
                  src={`${REPO_NAME}red.png`}
                  className="aspect-[3/4] w-[40vw] rounded-lg object-cover"
                />
              </div>
              <div className="animate-wiggle">
                <img
                  src={`${REPO_NAME}white.png`}
                  className="aspect-[3/4] w-[40vw] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex w-[min(90vw,320px)] flex-col gap-4 text-center">
            <span className="text-[24px]">
              That's all, sweetie. Hope you like my little gift for this
              Valentine!
            </span>
            <span className="text-[24px]">
              Let's love more than yesterday and less than tomorrow.
            </span>
          </div>
        );

      default:
        break;
    }
  }, [scene]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {renderScene()}
      {scene < 4 ? (
        <div
          onClick={() => setScene(scene + 1)}
          className="mt-10 aspect-[16/9] w-[100px] cursor-pointer overflow-hidden rounded-xl"
        >
          <img
            src={`${REPO_NAME}arrow.png`}
            className="h-full w-full object-cover drop-shadow-2xl"
          />
        </div>
      ) : (
        <div
          onClick={() => navigate("/")}
          className="mt-10 aspect-[16/9] w-[100px] cursor-pointer overflow-hidden rounded-xl"
        >
          <RiHomeHeartFill className="h-full w-full object-cover drop-shadow-2xl" />
        </div>
      )}
    </div>
  );
}
