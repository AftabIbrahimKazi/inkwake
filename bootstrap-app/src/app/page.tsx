import Hero from "@/components/sections/Hero";
import PartnerLogos from "@/components/sections/PartnerLogos";
import DashboardAnalytics from "@/components/sections/DashboardAnalytics";
import FeatureTable from "@/components/sections/FeatureTable";
import ProcessTrack from "@/components/sections/ProcessTrack";
import PriceEstimator from "@/components/sections/PriceEstimator";
import MediaWall from "@/components/sections/MediaWall";
import VideoBox from "@/components/sections/VideoBox";
import CanvasWorkspace from "@/components/sections/CanvasWorkspace";
import EditorialGrid from "@/components/sections/EditorialGrid";
import ReviewColumns from "@/components/sections/ReviewColumns";
import TeamDirectory from "@/components/sections/TeamDirectory";
import PricingMatrix from "@/components/sections/PricingMatrix";
import FAQIndex from "@/components/sections/FAQIndex";
import StatusDashboard from "@/components/sections/StatusDashboard";
import IntakeSheet from "@/components/sections/IntakeSheet";
import ResourceFeed from "@/components/sections/ResourceFeed";
import ConversionPanel from "@/components/sections/ConversionPanel";
import RegionalDirectory from "@/components/sections/RegionalDirectory";

export default function Home() {
  return (
    <main className="d-flex flex-column flex-fill">
      <Hero />
      <PartnerLogos />
      <DashboardAnalytics />
      <FeatureTable />
      <ProcessTrack />
      <PriceEstimator />
      <MediaWall />
      <VideoBox />
      <CanvasWorkspace />
      <EditorialGrid />
      <ReviewColumns />
      <TeamDirectory />
      <PricingMatrix />
      <FAQIndex />
      <StatusDashboard />
      <IntakeSheet />
      <ResourceFeed />
      <ConversionPanel />
      <RegionalDirectory />
    </main>
  );
}
