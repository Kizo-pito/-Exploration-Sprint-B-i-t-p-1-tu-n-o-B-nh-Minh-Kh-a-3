/* Service worker tối thiểu: Android Chrome chỉ cho hiện thông báo hệ thống qua service worker.
   Không cache, không chạy nền, không gửi dữ liệu đi đâu. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow("./")));
});
