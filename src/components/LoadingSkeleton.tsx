import { Skeleton } from 'antd';

interface LoadingCardSkeletonProps {
  count?: number;
}

export function LoadingCardSkeleton({ count = 6 }: LoadingCardSkeletonProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden bg-white/80">
          <Skeleton.Node active className="w-full">
            <div className="w-full aspect-[4/3] bg-[var(--color-beige)] rounded-t-2xl" />
          </Skeleton.Node>
          <div className="p-4">
            <Skeleton title={{ width: '60%' }} paragraph={{ rows: 2 }} active />
          </div>
        </div>
      ))}
    </div>
  );
}
