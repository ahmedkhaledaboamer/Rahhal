import type { ImageKey } from './images';
import type { Localized, LocalizedList } from '../types/i18n';

export type Destination = {
  id: string;
  name: Localized;
  tagline: Localized;
  description: Localized;
  highlights: LocalizedList;
  addons: Localized;
  duration: Localized;
  season: Localized;
  /** First image is the card cover; all images appear in the gallery. */
  images: {key: ImageKey;alt: Localized;}[];
};

export const destinations: Destination[] = [
{
  id: 'dahab',
  name: { ar: 'دهب', en: 'Dahab' },
  tagline: { ar: 'مدينة الهدوء والبحر والجبل', en: 'Where calm meets sea and mountain' },
  description: {
    ar: 'دهب وجهة مثالية لمحبي الاسترخاء والغوص والطبيعة، بأجواء بسيطة وشواطئ ساحرة ومطاعم كورنيش مميزة.',
    en: 'Dahab is perfect for lovers of relaxation, diving and nature — laid-back vibes, enchanting beaches and wonderful seafront restaurants.'
  },
  highlights: {
    ar: [
    'زيارة منطقة البلو هول والغوص أو السنوركلينج.',
    'رحلة التلات بوولز (Three Pools) والاستمتاع بالمياه الصافية.',
    'جلسة بدوية مسائية على الشاطئ.',
    'رحلة سفاري بالجبال والوديان.'],

    en: [
    'Visit the Blue Hole for diving or snorkeling.',
    'A trip to the Three Pools to enjoy crystal-clear water.',
    'An evening Bedouin gathering on the beach.',
    'A safari through the mountains and valleys.']

  },
  addons: {
    ar: 'رحلة محمية رأس أبو جلوم، وركوب الجمال، ودورة غوص للمبتدئين.',
    en: 'Ras Abu Galum Protectorate trip, camel riding and a beginner diving course.'
  },
  duration: { ar: 'من 3 أيام / ليلتين إلى 5 أيام / 4 ليالٍ', en: 'From 3 days / 2 nights to 5 days / 4 nights' },
  season: { ar: 'طوال العام، وخصوصًا الربيع والخريف', en: 'All year round, especially spring and autumn' },
  images: [
  { key: 'dahabBlueHole', alt: { ar: 'البلو هول في دهب', en: 'The Blue Hole in Dahab' } },
  { key: 'dahabCoast', alt: { ar: 'كورنيش دهب وقت الغروب', en: 'Dahab seafront at sunset' } },
  { key: 'dahabBedouin', alt: { ar: 'جلسة بدوية على شاطئ دهب', en: 'Bedouin seating on a Dahab beach' } }]

},
{
  id: 'sharm',
  name: { ar: 'شرم الشيخ', en: 'Sharm El Sheikh' },
  tagline: { ar: 'لؤلؤة البحر الأحمر', en: 'The pearl of the Red Sea' },
  description: {
    ar: 'وجهة سياحية عالمية تجمع بين أجمل الشعاب المرجانية ومنتجعات الفخامة وحياة ليلية وأنشطة لا تنتهي.',
    en: 'A world-class destination combining stunning coral reefs, luxury resorts, lively nightlife and endless activities.'
  },
  highlights: {
    ar: [
    'رحلة بحرية إلى جزيرة تيران أو الجزيرة البيضاء.',
    'السنوركلينج والغوص في أجمل المواقع.',
    'التجول في خليج نعمة والسوق القديم.',
    'الاستمتاع بالمنتجعات والشواطئ الخاصة.'],

    en: [
    'A boat trip to Tiran Island or White Island.',
    'Snorkeling and diving at the finest spots.',
    'Strolling around Naama Bay and the Old Market.',
    'Enjoying resorts and private beaches.']

  },
  addons: {
    ar: 'رحلة محمية رأس محمد، وسفاري الصحراء والعشاء البدوي، وحديقة المياه.',
    en: 'Ras Mohammed National Park, desert safari with Bedouin dinner, and the water park.'
  },
  duration: { ar: 'من 3 أيام / ليلتين إلى 7 أيام / 6 ليالٍ', en: 'From 3 days / 2 nights to 7 days / 6 nights' },
  season: { ar: 'طوال العام، والشتاء معتدل والصيف مناسب للبحر', en: 'All year round — mild winters and summers made for the sea' },
  images: [
  { key: 'sharmReef', alt: { ar: 'الشعاب المرجانية في شرم الشيخ', en: 'Coral reef in Sharm El Sheikh' } },
  { key: 'sharmBoat', alt: { ar: 'يخت قرب جزيرة تيران', en: 'Yacht near Tiran Island' } },
  { key: 'sharmResort', alt: { ar: 'منتجع على شاطئ شرم الشيخ', en: 'Beach resort in Sharm El Sheikh' } }]

},
{
  id: 'hurghada',
  name: { ar: 'الغردقة', en: 'Hurghada' },
  tagline: { ar: 'عاصمة السياحة الشاطئية على البحر الأحمر', en: 'The beach capital of the Red Sea' },
  description: {
    ar: 'الغردقة مثالية للعائلات ومحبي البحر، بفنادق ومنتجعات متنوعة وجزر قريبة وأنشطة بحرية وصحراوية.',
    en: 'Hurghada is ideal for families and sea lovers, with a wide choice of hotels and resorts, nearby islands, and sea and desert activities.'
  },
  highlights: {
    ar: [
    'رحلة بحرية إلى جزيرة الجفتون (السنوركلينج والشواطئ).',
    'الغوص والسنوركلينج بين الشعاب المرجانية.',
    'سفاري الصحراء بسيارات الدفع الرباعي والموتوسيكل رباعي.',
    'التنزه في المارينا وأسواق المدينة.'],

    en: [
    'A boat trip to Giftun Island (snorkeling and beaches).',
    'Diving and snorkeling among the coral reefs.',
    'Desert safari by 4x4 and quad bike.',
    'Strolling the marina and the city markets.']

  },
  addons: {
    ar: 'رحلة الغواصة السياحية، ورحلة الأقصر من الغردقة، وصيد السمك.',
    en: 'Submarine tour, a day trip to Luxor from Hurghada, and fishing.'
  },
  duration: { ar: 'من 3 أيام / ليلتين إلى 7 أيام / 6 ليالٍ', en: 'From 3 days / 2 nights to 7 days / 6 nights' },
  season: { ar: 'طوال العام', en: 'All year round' },
  images: [
  { key: 'hurghadaGiftun', alt: { ar: 'جزيرة الجفتون في الغردقة', en: 'Giftun Island, Hurghada' } },
  { key: 'hurghadaMarina', alt: { ar: 'مارينا الغردقة ليلًا', en: 'Hurghada Marina at dusk' } },
  { key: 'hurghadaSafari', alt: { ar: 'سفاري الصحراء في الغردقة', en: 'Desert safari near Hurghada' } }]

},
{
  id: 'nuweiba',
  name: { ar: 'نويبع', en: 'Nuweiba' },
  tagline: { ar: 'سيناء البكر بين البحر والجبال', en: 'Untouched Sinai between sea and mountains' },
  description: {
    ar: 'نويبع للباحثين عن الهدوء والمخيمات البدوية والطبيعة الصافية بعيدًا عن الزحام.',
    en: 'Nuweiba is for those seeking peace, Bedouin camps and pristine nature far from the crowds.'
  },
  highlights: {
    ar: [
    'الإقامة في مخيمات بدوية أو فنادق بسيطة على الشاطئ.',
    'زيارة الوادي الملون وجباله المتعددة الألوان.',
    'السنوركلينج بين الشعاب المرجانية القريبة من الشاطئ.',
    'سهرات بدوية وتأمل النجوم.'],

    en: [
    'Stay in Bedouin camps or simple beachfront hotels.',
    'Visit the Colored Canyon and its multicolored rocks.',
    'Snorkeling on coral reefs close to the shore.',
    'Bedouin evenings and stargazing.']

  },
  addons: {
    ar: 'رحلة إلى طابا وجزيرة فرعون، وسفاري الجبال.',
    en: "A trip to Taba and Pharaoh's Island, and a mountain safari."
  },
  duration: { ar: 'من 2 إلى 4 ليالٍ', en: 'From 2 to 4 nights' },
  season: { ar: 'من الخريف إلى الربيع', en: 'Autumn through spring' },
  images: [
  { key: 'nuweibaCamp', alt: { ar: 'مخيم بدوي على شاطئ نويبع', en: 'Bedouin beach camp in Nuweiba' } },
  { key: 'nuweibaCanyon', alt: { ar: 'الوادي الملون قرب نويبع', en: 'The Colored Canyon near Nuweiba' } },
  { key: 'nuweibaStars', alt: { ar: 'سماء النجوم فوق جبال سيناء', en: 'Starry sky over the Sinai mountains' } }]

},
{
  id: 'catherine',
  name: { ar: 'سانت كاترين', en: 'Saint Catherine' },
  tagline: { ar: 'رحلة روحانية على أرض سيناء المقدسة', en: 'A spiritual journey on the sacred land of Sinai' },
  description: {
    ar: 'وجهة فريدة تجمع بين التاريخ والروحانيات والطبيعة الجبلية، وفيها أعلى قمة في مصر.',
    en: "A unique destination where history, spirituality and mountain scenery meet — home to Egypt's highest peak."
  },
  highlights: {
    ar: [
    'زيارة دير سانت كاترين العريق (ضمن مواقع التراث العالمي لليونسكو).',
    'صعود جبل موسى ليلًا ومشاهدة الشروق من القمة.',
    'التجول في وادي الأربعين والواحات الجبلية.',
    'التعرف على حياة أهل المنطقة من البدو.'],

    en: [
    "Visit the historic Saint Catherine's Monastery (a UNESCO World Heritage Site).",
    'Climb Mount Sinai by night and watch the sunrise from the summit.',
    'Explore Wadi El Arbaein and the mountain oases.',
    'Get to know the life of the local Bedouin community.']

  },
  addons: {
    ar: 'رحلة جبل كاترين لمحبي التسلق، وزيارة وادي فيران.',
    en: 'Mount Catherine climb for hiking lovers, and a visit to Wadi Feiran.'
  },
  duration: {
    ar: 'ليلتان إلى 3 ليالٍ (غالبًا ضمن برنامج مع دهب أو شرم الشيخ)',
    en: '2 to 3 nights (often combined with Dahab or Sharm El Sheikh)'
  },
  season: {
    ar: 'الربيع والخريف. الشتاء بارد جدًا وقد تتساقط الثلوج، فجهّز ملابس ثقيلة',
    en: 'Spring and autumn. Winter is very cold and it may snow, so pack warm clothes'
  },
  images: [
  { key: 'catherineMonastery', alt: { ar: 'دير سانت كاترين', en: "Saint Catherine's Monastery" } },
  { key: 'catherineSunrise', alt: { ar: 'الشروق من قمة جبل موسى', en: 'Sunrise from the summit of Mount Sinai' } },
  { key: 'catherineWadi', alt: { ar: 'واحة جبلية في سانت كاترين', en: 'Mountain oasis in Saint Catherine' } }]

},
{
  id: 'sedr',
  name: { ar: 'رأس سدر', en: 'Ras Sedr' },
  tagline: { ar: 'شاطئ قريب وهادئ وأجواء رياضية', en: 'A nearby, quiet beach with a sporty vibe' },
  description: {
    ar: 'رأس سدر قريبة من القاهرة وتناسب الرحلات القصيرة وعشاق الرياضات الشراعية والاسترخاء.',
    en: 'Close to Cairo, Ras Sedr is ideal for short getaways, wind-sport lovers and pure relaxation.'
  },
  highlights: {
    ar: [
    'شواطئ هادئة وأجواء مناسبة للعائلات.',
    'ممارسة رياضات الكايت سيرف والويند سيرف حسب الموسم.',
    'زيارة عيون موسى.',
    'سهرات الشاطئ والشواء.'],

    en: [
    'Calm beaches and a family-friendly atmosphere.',
    'Kitesurfing and windsurfing, depending on the season.',
    'A visit to the Springs of Moses (Uyun Musa).',
    'Beach evenings and barbecues.']

  },
  addons: {
    ar: 'رحلة اليوم الواحد (Day Use) لمجموعات الشركات والمدارس.',
    en: 'Day-use trips for company and school groups.'
  },
  duration: { ar: 'يوم واحد أو إجازة نهاية أسبوع', en: 'A day trip or a weekend getaway' },
  season: { ar: 'طوال العام', en: 'All year round' },
  images: [
  { key: 'sedrKite', alt: { ar: 'الكايت سيرف في رأس سدر', en: 'Kitesurfing in Ras Sedr' } },
  { key: 'sedrBeach', alt: { ar: 'شاطئ هادئ في رأس سدر', en: 'A calm beach in Ras Sedr' } },
  { key: 'sedrBbq', alt: { ar: 'سهرة شواء على الشاطئ', en: 'Beach barbecue evening' } }]

},
{
  id: 'sokhna',
  name: { ar: 'العين السخنة', en: 'Ain Sokhna' },
  tagline: { ar: 'أقرب شاطئ للقاهرة وأكثرها حيوية', en: "Cairo's closest and liveliest beach" },
  description: {
    ar: 'العين السخنة الاختيار الأمثل لإجازة قصيرة بعيدًا عن الزحام، بقرى سياحية وشواطئ متعددة وأنشطة ترفيهية.',
    en: 'Ain Sokhna is the perfect choice for a short break away from the crowds, with resort villages, many beaches and plenty of activities.'
  },
  highlights: {
    ar: [
    'الإقامة في قرى ومنتجعات بالشاطئ.',
    'الأنشطة البحرية والجلسات الشاطئية.',
    'الاستمتاع بالمطاعم والكافيهات على البحر.',
    'قربها من القاهرة (نحو ساعة ونصف) يوفّر وقت السفر.'],

    en: [
    'Stay in beachfront villages and resorts.',
    'Water activities and relaxed beach lounging.',
    'Seaside restaurants and cafés.',
    'Just about an hour and a half from Cairo, saving travel time.']

  },
  addons: {
    ar: 'رحلات اليوم الواحد ورحلات الشركات والمؤتمرات.',
    en: 'Day trips, corporate outings and conferences.'
  },
  duration: { ar: 'يوم واحد أو من ليلة إلى 3 ليالٍ', en: 'A day trip, or 1 to 3 nights' },
  season: { ar: 'طوال العام، والصيف أكثر ازدحامًا', en: 'All year round — summer is the busiest' },
  images: [
  { key: 'sokhnaResort', alt: { ar: 'منتجع في العين السخنة', en: 'Resort in Ain Sokhna' } },
  { key: 'sokhnaCafe', alt: { ar: 'كافيه على البحر في العين السخنة', en: 'Seaside café in Ain Sokhna' } },
  { key: 'sokhnaPool', alt: { ar: 'حمام سباحة مطل على البحر', en: 'Pool overlooking the sea' } }]

}];