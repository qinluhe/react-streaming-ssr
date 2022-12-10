/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import withDataFetching from './withDataFetching';

const Comments = ({
  data
}) => {
  return (
    <div>
      {data?.map((comment, i) => (
        <p className="comment" key={i}>
          {comment}
        </p>
      ))}
    </div>
  );
}
Comments.getDataId = function() {
  return 'comment-list'
}
Comments.getFetchingProps = function(data) {
  return data.read();
}


export default withDataFetching(Comments)
