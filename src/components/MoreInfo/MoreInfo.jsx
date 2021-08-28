import React from 'react';
import './MoreInfo.scss';

function MoreInfo({
  onDetailClick,
}) {
  return (
    <button
      className="moreinfo"
      type="button"
      onClick={onDetailClick}
    >
      More Information
    </button>
  );
}

export default MoreInfo;
