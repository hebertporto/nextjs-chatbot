import dayjsHelper from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjsHelper.extend(utc);
dayjsHelper.extend(timezone);
dayjsHelper.extend(advancedFormat);
dayjsHelper.extend(relativeTime);

const getChatMessageTime = (time: string) => {
  return dayjsHelper().to(dayjsHelper(time));
};

export { dayjsHelper, getChatMessageTime };
