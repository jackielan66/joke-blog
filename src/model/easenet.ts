export interface EaseNews {
    liveInfo:     null;
    docid:        string;
    source:       string;
    title:        string;
    priority:     number;
    hasImg:       number;
    url:          string;
    commentCount: number;
    imgsrc3gtype: string;
    stitle:       string;
    digest:       string;
    imgsrc:       string;
    ptime:        Date;
}

// Converts JSON strings to/from your types
export class ConvertEaseNews {
    public static toWelcome(json: string): EaseNews {
        return JSON.parse(json);
    }

    public static welcomeToJson(value: EaseNews): string {
        return JSON.stringify(value);
    }
}