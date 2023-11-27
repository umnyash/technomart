export const initContactsMapModal = (modalElement, openModal) => {
  const ZOOM = 18;
  const officeCoordinates = {
    lat: 59.938631,
    lng: 30.323037,
  };

  const mapWrapperElement = modalElement.querySelector('.contacts-map .map__main');
  const map = L.map(mapWrapperElement);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markerIcon = L.icon({
    iconUrl: 'img/icons.svg#map_marker',
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });

  const marker = L.marker(officeCoordinates, {
    icon: markerIcon,
  });

  marker.addTo(map);

  document.querySelectorAll('[data-modal-opener="map"]').forEach((opener) => {
    opener.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal(modalElement);
      map.setView(officeCoordinates, ZOOM);
      map.invalidateSize();
    });
  });
};
