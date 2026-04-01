export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              ✈️ 트래블샵
            </p>
            <p className="mt-1 text-xs text-gray-500">
              최고의 여행 상품을 합리적인 가격에
            </p>
          </div>
          <p className="text-xs text-gray-400">
            © 2026 트래블샵. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
