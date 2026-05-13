export const prerender = false;

const roadmaps: Record<string, any> = {
  "checkout": { _id: "checkout", slug: "checkout", type: "role", title: { card: "Checkout", page: "Checkout Roadmap" }, description: "Checkout payment flow roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Checkout Roadmap", description: "Checkout roadmap", keywords: ["checkout"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 1 },
  "digital-banking": { _id: "digital-banking", slug: "digital-banking", type: "role", title: { card: "Digital Banking", page: "Digital Banking Roadmap" }, description: "Digital Banking roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Digital Banking Roadmap", description: "Digital Banking roadmap", keywords: ["digital-banking"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 2 },
  "payouts": { _id: "payouts", slug: "payouts", type: "role", title: { card: "Payouts", page: "Payouts Roadmap" }, description: "Payouts roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Payouts Roadmap", description: "Payouts roadmap", keywords: ["payouts"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 3 },
  "core-platform": { _id: "core-platform", slug: "core-platform", type: "role", title: { card: "Core Platform", page: "Core Platform Roadmap" }, description: "Core Platform roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Core Platform Roadmap", description: "Core Platform roadmap", keywords: ["core-platform"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 4 },
  "tigg-engage": { _id: "tigg-engage", slug: "tigg-engage", type: "role", title: { card: "Tigg Engage", page: "Tigg Engage Roadmap" }, description: "Tigg Engage roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Tigg Engage Roadmap", description: "Tigg Engage roadmap", keywords: ["tigg-engage"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 5 },
  "global-api-payouts": { _id: "global-api-payouts", slug: "global-api-payouts", type: "skill", title: { card: "Global API Payouts", page: "Global API Payouts Roadmap" }, description: "Global API Payouts roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Global API Payouts Roadmap", description: "Global API Payouts roadmap", keywords: ["global-api-payouts"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 6 },
  "observability": { _id: "observability", slug: "observability", type: "skill", title: { card: "Observability", page: "Observability Roadmap" }, description: "Observability roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Observability Roadmap", description: "Observability roadmap", keywords: ["observability"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 7 },
  "security": { _id: "security", slug: "security", type: "skill", title: { card: "Security", page: "Security Roadmap" }, description: "Security roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Security Roadmap", description: "Security roadmap", keywords: ["security"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 8 },
  "infrastructure": { _id: "infrastructure", slug: "infrastructure", type: "skill", title: { card: "Infrastructure", page: "Infrastructure Roadmap" }, description: "Infrastructure roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Infrastructure Roadmap", description: "Infrastructure roadmap", keywords: ["infrastructure"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 9 },
  "checkout-global-api": { _id: "checkout-global-api", slug: "checkout-global-api", type: "skill", title: { card: "Checkout Global API", page: "Checkout Global API Roadmap" }, description: "Checkout Global API roadmap", nodes: [], edges: [], draft: { nodes: [], edges: [] }, seo: { title: "Checkout Global API Roadmap", description: "Checkout Global API roadmap", keywords: ["checkout-global-api"] }, relatedRoadmaps: [], courses: [], createdAt: "2024-01-01", updatedAt: "2024-01-01", order: 10 }
};

export async function GET({ params }: { params: { slug: string } }) {
  const roadmap = roadmaps[params.slug];
  if (!roadmap) {
    return new Response(JSON.stringify({ message: 'Not found', status: 404 }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response(JSON.stringify(roadmap), {
    headers: { 'Content-Type': 'application/json' }
  });
}
