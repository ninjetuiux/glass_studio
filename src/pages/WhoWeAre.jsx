import React, { useState, useEffect } from 'react';
import Layout from '../components/layout-theme/Layout';
import Img1 from '../../public/assets/ai/a3fdd2ef-5483-45f1-b379-eebf1941ee72.png';
import Img2 from '../../public/assets/ai/7c7250d9-3f7f-4aa0-b8b4-ce1760e642df.png';

export default function WhoWeAre() {
  const [isReverseOrder, setIsReverseOrder] = useState(false);
  const [isOverflowYEnabled, setIsOverflowYEnabled] = useState(true);

  const handleResize = () => {
    setIsReverseOrder(window.innerWidth < 790);
    setIsOverflowYEnabled(window.innerWidth >= 1280);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className={`md:pt-5 sm:pl-[18%] sm:mr-[18%] sm:pr-6 sm:px-5 ${isOverflowYEnabled ? 'overflow-y-auto' : ''}`}>
        <div className={`md:pb-10 grid grid-cols-1 2xl:w-[70vw] md:grid-cols-2 gap-3 px-3 xl:gap-10 md:h-auto min-h-screen overflow-hidden items-center ${isReverseOrder ? 'md:flex-row-reverse' : ''}`}>
          <div className="bg-[#181c23] rounded-xl p-6 shadow-xl h-full max-h-96 w-full overflow-y-auto mt-32 py-20 md:mt-0">
            <h1 className="lg:text-4xl text-xl font-bold text-white leading-tight">
              ברוכים הבאים לאמנות הזכוכית
            </h1>
            <p className="text-white overflow-ellipsis h-full max-h-96">
              היעד המוביל שלך להתקנות זכוכית משובחות בישראל. עם המומחיות והתשוקה שלנו
              לאומנות זכוכית, אנו מפגישים אומנות ופונקציונליות כדי ליצור פתרונות זכוכית
              מדהימים עבור חללי מגורים ומסחר. ממקלחות ומדפים מזכוכית ועד מראות ומחיצות,
              אנו מציעים מגוון רחב של שירותים לשיפור סביבת המגורים או העבודה שלך. ב-Glass Art
              אנו שואפים למצוינות בכל פרויקט, תוך הבטחת שביעות רצון מלאה של הלקוח מרעיון ועד
              יצירה.
            </p>
          </div>
          <div className="rounded-xl shadow-xl overflow-hidden h-full max-h-96 w-full">
            <img src={Img1} alt="shower 1" className="object-fit w-full h-full" />
          </div>
          {isReverseOrder ? (
            <>
              <div className="bg-[#181c23] rounded-xl p-6 shadow-xl h-full max-h-96 w-full">
                <h1 className="lg:text-4xl text-xl font-bold text-white leading-tight">
                  יצירת יופי בזכוכית
                </h1>
                <p className="text-white overflow-ellipsis overflow-y-auto h-full max-h-96">
                  ב-Glass Art, אנו מסורים לאמנות מיצב הזכוכית. האומנים המיומנים שלנו משלבים
                  דיוק טכני עם כשרון יצירתי כדי להפוך חללים רגילים לחללי ראווה יוצאי דופן
                  של אומנות זכוכית. בין אם אתם מחפשים לשדרג את חדר האמבטיה שלכם עם מקלחון זכוכית
                  יוקרתי, להוסיף אלגנטיות לבית שלכם עם מדפי זכוכית, או ליצור סביבה משרדית
                  עכשווית עם מחיצות זכוכית, יש לנו את המומחיות להגשים את החזון שלכם. עם תשומת
                  לב לפרטים ומחויבות לאיכות, אנו גאים באספקת פתרונות זכוכית בהתאמה אישית העולה
                  על הציפיות.
                </p>
              </div>
              <div className={`rounded-xl shadow-xl overflow-hidden h-full max-h-96 w-full ${isReverseOrder ? 'md:order-first' : ''}`}>
                <img src={Img1} alt="shower 2" className="object-fit w-full h-full max-h-96" />
              </div>
            </>
          ) : (
            <>
              <div className={`rounded-xl shadow-xl overflow-hidden h-full max-h-96 w-full ${isReverseOrder ? 'md:order-first' : ''}`}>
                <img src={Img2} alt="shower 2" className="object-fit w-full h-full max-h-96" />
              </div>
              <div className="bg-[#181c23] rounded-xl overflow-y-auto p-6 shadow-xl h-full max-h-96 w-full">
                <h1 className="lg:text-4xl text-xl font-bold text-white leading-tight">
                  יצירת יופי בזכוכית
                </h1>
                <p className="text-white overflow-ellipsis h-full max-h-96">
                  ב-Glass Art, אנו מסורים לאמנות מיצב הזכוכית. האומנים המיומנים שלנו משלבים
                  דיוק טכני עם כשרון יצירתי כדי להפוך חללים רגילים לחללי ראווה יוצאי דופן
                  של אומנות זכוכית. בין אם אתם מחפשים לשדרג את חדר האמבטיה שלכם עם מקלחון זכוכית
                  יוקרתי, להוסיף אלגנטיות לבית שלכם עם מדפי זכוכית, או ליצור סביבה משרדית
                  עכשווית עם מחיצות זכוכית, יש לנו את המומחיות להגשים את החזון שלכם. עם תשומת
                  לב לפרטים ומחויבות לאיכות, אנו גאים באספקת פתרונות זכוכית בהתאמה אישית העולה
                  על הציפיות.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
