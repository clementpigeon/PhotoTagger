(function(root) {
  var PT = root.PT = (root.PT || {});

  var Model = PT.Model = function(obj) {
    this.attributes = _.extend(obj);
  }

  Model.all = [];

  Model._events = {};

  Model.find = function(id) {
    var result;
    this.all.forEach(function(model){
      if (model.get('id') == id) {
        result = model;
      };
    });
    return result;
  }

  Model.prototype.get = function(attrName) {
    return this.attributes[attrName];
  }

  Model.prototype.set = function(attrName, val) {
    this.attributes[attrName] = val;
  }


  Model.on = function(eventName, callback) {
    if (_.has(this._events, eventName)) {
      this._events[eventName] += callback;
    }
    else {
      this._events[eventName] = [callback];
    }
  }

  Model.trigger = function(eventName) {
    this._events[eventName].forEach(function(event){
      event();
    });
  }

})(this);