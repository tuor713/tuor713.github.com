(ns tools
  (:require 
    [goog.ui.DatePicker :as DatePicker]
    [goog.date.Date :as Date]))

(def dependencies (atom {}))
(def updates (atom {}))

(defn calculate [var]
  (let [{deps :dependencies fn :function} (@updates var)]
    (apply fn 
      (map 
        #(let [e (js/$ %)] 
          (or (.get e "value") (.get e "text"))) 
        deps))))

(defn recalc-all [changed]
  (loop [todo (get @dependencies changed)]
    (when-not (empty? todo)
      (let [updated (doall
                      (keep identity
                        (map 
                          #(do
                            (let [nval (calculate %)
                                 e (js/$ %)]
                              (if (= (.get e "text") nval)
                                nil
                                (do
                                  (.set e "text" nval)
                                  %))))
                          todo)))
            new-todo (reduce into #{} (map @dependencies updated))]
        (recur new-todo)))))

(defn depends [var deps fn]
  (swap! dependencies #(merge-with into % (zipmap (seq deps) (repeat #{var}))))
  (swap! updates assoc var {:dependencies (seq deps) :function fn}))

(defn switch-to-free-text [e]
  (let [ne (js/Element. "input" 
              (.strobj {"value" (.get e "text") 
                        "size" (.getAttribute e "size")
                        "id" (.getAttribute e "id")
                        "tabindex" (.getAttribute e "tabindex")}))]

    (when-not (= undefined (.getAttribute e "id"))
      (.addEvent ne "input"
        #(recalc-all (.getAttribute e "id"))))
                        
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
  (let [ne (js/Element. "select" (.strobj {"tabindex" (.getAttribute e "tabindex") "id" (.getAttribute e "id")}))]
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
               "id" (.getAttribute e "id")
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
               "id" (.getAttribute e "id")
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

(defn switch-to-datepicker [e]
  (let [ne (js/Element "div")
        [year month day] (map #(js/parseInt %) (.split (.get e "text") "-"))
        picker (goog.ui.DatePicker. (goog.date.Date. year (- month 1) day))]

    (.addClass ne "datepicker-container")

    (.setShowFixedNumWeeks picker false)
    (.setUseSimpleNavigationMenu picker true)
    (.setAllowNone picker false)
    (.setShowWeekNum picker false)
    
    (.addEventListener picker
      "select" 
      (fn []
        (let [date (. picker (getDate))]
          (.set e "text" 
            (str (. date (getFullYear))
                 "-"
                 (+ 1 (. date (getMonth)))
                 "-"
                 (. date (getDate)))))
        (.replaces e ne)))
    
    (.replaces ne e)
    (.render picker ne)))

(defn make-datepicker [e]
  (.addEvent e "click" #(switch-to-datepicker e))
  (.addEvent e "focus" #(switch-to-datepicker e)))

(def handlers
  {"free-text" make-free-text
   "select" make-select
   "range" make-range
   "date" make-date
   "datepicker" make-datepicker})

(.addEvent js/document
  "domready"
  (fn []
    (.each (js/$$ "span[rich-input]")
      (fn [e ind]
        (let [type (.getAttribute e "rich-input")]
          (.setAttribute e "tabindex" (+ ind 1))
          (.addClass e "rich-input")
          ((handlers type) e))))))

(defn palindrome [s]
  (= (reverse s) (seq s)))


