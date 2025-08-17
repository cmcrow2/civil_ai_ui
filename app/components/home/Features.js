import FeatureCard from "@/app/components/home/FeatureCard";
import { MessageCircleReply, BookText, Search, HardHat } from "lucide-react";

const Features = () => {
  return (
    <div className="mb-30 pt-10">
      <FeatureCard
        icon={
          <MessageCircleReply
            className="w-16 h-16"
            strokeWidth={1}
            color="#d92d20"
          />
        }
        title={"instant answers"}
        description={
          "Skip the manual flipping through hundreds of pages. Just ask a question, and p.ai.ge instantly finds and delivers the exact specification you need — no guessing, no wasted time."
        }
      />
      <FeatureCard
        icon={
          <BookText className="w-16 h-16" strokeWidth={1} color="#d92d20" />
        }
        title={"verified sources"}
        description={
          "Each response is sourced directly from your uploaded documents. Citations and reference sections are provided so you can double-check with confidence."
        }
      />
      <FeatureCard
        icon={<Search className="w-16 h-16" strokeWidth={1} color="#d92d20" />}
        title={"smart search"}
        description={
          "Search your way — by project type, material, or section number. Paige understands industry context and terminology, delivering precise and relevant results."
        }
      />
      <FeatureCard
        icon={<HardHat className="w-16 h-16" strokeWidth={1} color="#d92d20" />}
        title={"engineer-friendly output"}
        description={
          "Get results formatted in tables, bullet points, or technical summaries, making it quick to apply the information directly into your work without extra reformatting."
        }
      />
    </div>
  );
};

export default Features;
