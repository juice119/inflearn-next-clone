type DashboardDetailPageProps = {
    params: {
        id: string;
    };
    searchParams: Record<string, string | string[] | undefined>;
};

export default function DashboardDetailPage({params, searchParams}: DashboardDetailPageProps) {
    console.log(params);
    return <main>DashBoard Detail Page {params.id} {searchParams.code}</main>;
}
