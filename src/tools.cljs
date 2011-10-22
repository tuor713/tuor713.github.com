(ns tools)

(defn switch-to-free-text [e]
  (let [ne (js/Element. "input" 
              (.strobj {"value" (.get e "text") 
                        "size" (.getAttribute e "size")
                        "tabindex" (.getAttribute e "tabindex")}))]
    (.addEvent ne "blur" 
      (fn [_] 
        (.set e "text" (.get ne "value"))
        (.replaces e ne)))
    (.replaces ne e)
    (. ne (focus))))

(defn make-free-text [e]
  (.addEvent e "click" #(switch-to-free-text e))
  (.addEvent e "focus" #(switch-to-free-text e)))

(defn switch-to-select [e choices]
  (let [ne (js/Element. "select" (.strobj {"tabindex" (.getAttribute e "tabindex")}))]
    (.addEvent ne "blur"
      (fn [_]
        (.set e "text" (.get ne "value"))
        (.replaces e ne)))
        
    (doall
      (map 
        (fn [c]
          (let [option (js/Element. "option" 
                          (.strobj {"value" c 
                                    "selected" (if (= c (.get e "text")) "selected" "")}))] 
            (.set option "text" c)
            (.appendChild ne option)))
        choices))
    
    (.replaces ne e)
    (. ne (focus))))

(defn make-select [e]
  (let [choices (.split (.getAttribute e "choices") ",")]
    (.addEvent e "click" #(switch-to-select e choices))
    (.addEvent e "focus" #(switch-to-select e choices))))

(defn switch-to-range [e min max step]
  (let [ne (js/Element. "input" 
            (.strobj
              {"type" "range" 
               "tabindex" (.getAttribute e "tabindex")
               "min" min 
               "max" max 
               "step" step
               "value" (.get e "text")}))]
    
    (.addEvent ne "blur"
      (fn [_]
        (.set e "text" (.get ne "value"))
        (.replaces e ne)))
    
    (.replaces ne e)
    (. ne (focus))))

(defn make-range [e]
  (let [min (.getAttribute e "min")
        max (.getAttribute e "max")
        step (or (.getAttribute e "step") "1")]
    (.addEvent e "click" #(switch-to-range e min max step))
    (.addEvent e "focus" #(switch-to-range e min max step))))


(defn switch-to-date [e]
  (let [ne (js/Element "input"
            (.strobj
              {"type" "date"
               "tabindex" (.getAttribute e "tabindex")
               "value" (.get e "text")}))]
    (.addEvent ne "blur"
      (fn [_]
        (.set e "text" (.get ne "value"))
        (.replaces e ne)))           

    (.replaces ne e)
    (. ne (focus))))

(defn make-date [e]
  (.addEvent e "click" #(switch-to-date e))
  (.addEvent e "focus" #(switch-to-date e)))

(def handlers
  {"free-text" make-free-text
   "select" make-select
   "range" make-range
   "date" make-date})

(.addEvent js/document
  "domready"
  (fn []
    (.each (js/$$ "span[rich-input]")
      (fn [e ind]
        (let [type (.getAttribute e "rich-input")]
          (.setAttribute e "tabindex" (+ ind 1))
          (.addClass e "rich-input")
          ((handlers type) e))))))



