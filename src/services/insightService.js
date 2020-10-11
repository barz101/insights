import storageService from './storageService.js'

var processDB =
{
    _id: 1,
    status: 'inProcess',
    insights: [{
        _id: 1,
        data: 'במאורה באדמה גר לו הוביט. לא מאורה מגעילה, מרופשת וטחובה, מלאה שלשולים מתחפרים וריח בוץ, וגם לא מאורה יבשה, חשופית וחולית שאין בה מקום לשבת או דבר לאכול: זאת היתה מאורת? הוביט, ומשמעות הדבר נוחות.',
        statistics: {
            publishedContributorsCount: 7,
            publishedContributionsPercent: 27,
        }
    },
    {
        _id: 2,
        data:
            'היתה לה דלת עגולה דמוית צוהר, צבועה ירוק, ובדיוק במרכז ידית פליז צהובה ונוצצת. הדלת נפתחה אל פרוזדור דמוי מנהרה שצורתו כצינור: מנהרה נעימה מאוד ונטולת עשן, עם קריות מחופים ורצפה מרוצפת מכוסה שטיח, מצוידת בכיסאות ממורקים ובהמוני מתלים לכובעים ומעילים וההוביט היה מכניס אורחים.',
        statistics: {
            publishedContributorsCount: 8,
            publishedContributionsPercent: 33,
        }
    },
    {
        _id: 3,
        data: 'הסיפור החל... ובכן, הסיפור החל כפי שהיית הכי פחות מצפה: במחילה באדמה, שם חי לו הוביט, לא מחילה מלוכלכת, מלאה בתולעים ובריחות רעים. היה זה ביתו של הוביט, ומשמעות הדבר, אוכל טוב, אח חמימה וכל הנוחיות של בית.',
        statistics: {
            publishedContributorsCount: 9,
            publishedContributionsPercent: 35,
        }
    },
    {
        _id: 4,
        data: 'שמועות החלו להתפשט: הדרקון סמאוג, לא נראה מזה 60 שנה; עיניים מביטות מזרחה אל ההר, מעריכות, תוהות, שוקלות את הסיכון, באם העושר של עמנו שוכן לו בלתי מוגן, האם נשב מאחור בזמן שאחרים תובעים את ששייך לנו, או שנתפוס את ההזדמנות הזו ונכבוש בחזרה את ארבור!',
        statistics: {
            publishedContributorsCount: 10,
            publishedContributionsPercent: 38,
        }
    },
    {
        _id: 5,
        data: 'יהיה עליך להסתדר ללא מטפחת ובלי הרבה מאוד דברים נוספים, בילבו באגינס, לפני תום המסע. אתה נולדת בגבעות הקטנות ובנהרות הקטנים של הפלך, אולם הבית מאחוריך כעת והעולם לרגלייך.',
        statistics: {
            publishedContributorsCount: 11,
            publishedContributionsPercent: 40,
        }
    }
    ]
}

const STORAGE_KEY = 'process'
var gProcess = null;

export default {
    query,
    save,
    remove,
    get
}

function query() {
    gProcess = storageService.load(STORAGE_KEY) || processDB;
    console.log(gProcess);
    return Promise.resolve(gProcess);
}

function get(id) {
    const insight = gProcess.insights.find(insight => insight._id === id)
    console.log(insight);
    return Promise.resolve(insight)
}

function remove(id) {
    const idx = gProcess.insights.findIndex(insight => insight._id === id)
    gProcess.insights.splice(idx, 1)
    storageService.store(STORAGE_KEY, gProcess)
    return Promise.resolve()
}

function save(insight) {
    if (insight._id) {
        const idx = gProcess.insights.findIndex(_insight => _insight._id === insight._id)
        gProcess.insights.splice(idx, 1, insight)
        storageService.store(STORAGE_KEY, gProcess)
        return Promise.resolve(gProcess.insights[idx])
    }
}
